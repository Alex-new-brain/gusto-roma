import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../hooks/useLang';
import { useExploreFilter } from '../hooks/useExploreFilter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { scrollToElement } from '../lib/lenis';
import { collections } from '../data/collections';
import venuesData from '../data/venues.json';
import type { VenuesData, CollectionMeta, CollectionId } from '../types';
import '../styles/blocks/Collections.css';

gsap.registerPlugin(ScrollTrigger);

const data = venuesData as VenuesData;

const BG_VAR: Record<CollectionId, string> = {
  eat: 'var(--color-eat)',
  hidden: 'var(--color-hidden)',
  drink: 'var(--color-drink)',
  feel: 'var(--color-feel)',
};

const FG_VAR: Record<CollectionId, string> = {
  eat: 'var(--text-on-color)',
  hidden: 'var(--text)',
  drink: 'var(--color-eat)',
  feel: 'var(--text-on-color)',
};

function venueCount(collectionId: CollectionId) {
  return data.venues.filter((v) => v.collection === collectionId).length;
}

const REVEAL_SELECTOR =
  '.collection-fullscreen__name, .collection-fullscreen__full-name, .collection-fullscreen__count, .collection-fullscreen__tagline, .collection-fullscreen__actions';

function CollectionSection({ collection }: { collection: CollectionMeta }) {
  const { lang, t } = useLang();
  const { setCollectionFilter } = useExploreFilter();
  const ref = useScrollReveal<HTMLElement>(REVEAL_SELECTOR);

  function handleBrowse() {
    setCollectionFilter(collection.id);
    scrollToElement('explore');
  }

  const sectionStyle = {
    background: BG_VAR[collection.id],
    color: FG_VAR[collection.id],
    '--section-bg': BG_VAR[collection.id],
    '--section-fg': FG_VAR[collection.id],
  } as CSSProperties;

  return (
    <section
      id={collection.id}
      className="collection-fullscreen"
      style={sectionStyle}
      ref={ref}
    >
      <div className="collection-fullscreen__inner">
        <h3 className="collection-fullscreen__name">{collection.name[lang]}</h3>
        <p className="collection-fullscreen__full-name">{collection.fullName[lang]}</p>
        <p className="collection-fullscreen__count">
          {venueCount(collection.id)} {t('places_label')}
        </p>
        <p className="collection-fullscreen__tagline">&ldquo;{collection.tagline[lang]}&rdquo;</p>

        <div className="collection-fullscreen__actions">
          <a
            className="collection-fullscreen__map-btn"
            href={collection.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cta_open_map')}
          </a>
          <button className="collection-fullscreen__browse-btn" onClick={handleBrowse}>
            {t('cta_browse_places')} →
          </button>
        </div>
      </div>
    </section>
  );
}

// Breadcrumbs scroll to these instead of the sections themselves: once scrolled
// past, all `.collection-fullscreen` sections report an identical
// getBoundingClientRect() (an artifact of their shared position:sticky stacking +
// the GSAP scale transform), so scrollTo(section) always lands on the same one.
// These anchors sit outside that stack — appended after the sections so the
// existing `.collections-wrapper > section:nth-child(n)` z-index rules keep
// matching the right elements — each positioned at its section's own natural
// (unstuck) offset, which stays accurate regardless of scroll position.
function CollectionAnchors() {
  return (
    <>
      {collections.map((c, i) => (
        <div
          key={c.id}
          id={`anchor-${c.id}`}
          style={{ position: 'absolute', top: `${i * 100}vh`, left: 0 }}
        />
      ))}
    </>
  );
}

function CollectionBreadcrumbs({ visibleStrips }: { visibleStrips: CollectionId[] }) {
  const { lang } = useLang();

  return (
    <div className="collection-breadcrumbs">
      {collections
        .filter((c) => visibleStrips.includes(c.id))
        .map((c) => (
          <button
            key={c.id}
            className="breadcrumb-strip"
            style={{ background: BG_VAR[c.id], color: FG_VAR[c.id] }}
            onClick={() => scrollToElement(`anchor-${c.id}`)}
          >
            <span>{c.name[lang]}</span>
          </button>
        ))}
    </div>
  );
}

function Collections() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visibleStrips, setVisibleStrips] = useState<CollectionId[]>([]);
  const [hideForExplore, setHideForExplore] = useState(false);

  // Scale down each section slightly as the next one covers it.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const sections = Array.from(wrapper.querySelectorAll<HTMLElement>('.collection-fullscreen'));
    if (sections.length < 2) return;

    const ctx = gsap.context(() => {
      sections.forEach((section, i) => {
        const next = sections[i + 1];
        if (!next) return;
        gsap.to(section, {
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  // Track scroll progress through the stacked collections and reveal one breadcrumb
  // strip per section, in order, as each is scrolled past. This is computed from raw
  // scroll position rather than each section's rendered rect: because all 4 sections
  // share one sticky stacking region, an earlier section stays pinned at the top
  // until its follower fully arrives — and it also gets scaled down slightly by the
  // GSAP effect above right as that happens, which would make its own
  // getBoundingClientRect() unreliable as a "have I been passed?" signal. Scroll
  // position relative to the wrapper's own start is unaffected by that transform.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let ticking = false;

    function computeVisibleStrips() {
      if (!wrapper) return;
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      const progress = window.scrollY - wrapperTop;

      const strips: CollectionId[] = [];
      collections.forEach((c, i) => {
        if (progress >= (i + 1) * vh) strips.push(c.id);
      });
      setVisibleStrips(strips);

      // Hide the breadcrumbs once Explore covers at least half of the screen;
      // they reappear once the user scrolls back up past that point. Measured
      // against the viewport height, not Explore's own (much taller) height.
      const exploreEl = document.getElementById('explore');
      if (exploreEl) {
        const r = exploreEl.getBoundingClientRect();
        const visibleHeight = Math.min(r.bottom, vh) - Math.max(r.top, 0);
        const visibleRatio = visibleHeight / vh;
        setHideForExplore(visibleRatio >= 0.5);
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        computeVisibleStrips();
        ticking = false;
      });
    }

    computeVisibleStrips();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div id="collections" className="collections-wrapper" ref={wrapperRef}>
        {collections.map((c) => (
          <CollectionSection key={c.id} collection={c} />
        ))}
        <CollectionAnchors />
      </div>
      <CollectionBreadcrumbs visibleStrips={hideForExplore ? [] : visibleStrips} />
    </>
  );
}

export default Collections;
