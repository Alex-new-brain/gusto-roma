import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../hooks/useLang';
import { useExploreFilter } from '../hooks/useExploreFilter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { collections } from '../data/collections';
import { moods } from '../data/moods';
import { getCuisineLabel } from '../lib/cuisine';
import venuesData from '../data/venues.json';
import VenueCard from './VenueCard';
import type { VenuesData, CollectionId, MoodId } from '../types';
import '../styles/blocks/Explore.css';

const data = venuesData as VenuesData;

type SortKey = 'rating' | 'reviews' | 'price_asc' | 'price_desc';

const ITEMS_PER_PAGE = 12;

function Explore() {
  const { lang, t } = useLang();
  const { filter, clearFilter } = useExploreFilter();

  const [collectionTab, setCollectionTab] = useState<CollectionId | 'all'>('all');
  const [cuisine, setCuisine] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>('rating');
  const [moodId, setMoodId] = useState<MoodId | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const gridRef = useScrollReveal<HTMLDivElement>('.venue-card', 0.05);

  // Sync in from Collections' "Browse places" and MoodSelector clicks elsewhere on the page.
  useEffect(() => {
    if (!filter) return;
    if (filter.type === 'collection') {
      setCollectionTab(filter.id);
      setMoodId(null);
    } else {
      setMoodId(filter.id);
      setCollectionTab('all');
    }
    setCuisine('');
    setPrice(null);
  }, [filter]);

  // Reset pagination whenever the filtered set changes.
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [collectionTab, cuisine, price, sort, moodId]);

  function selectCollectionTab(id: CollectionId | 'all') {
    setCollectionTab(id);
    setMoodId(null);
  }

  function selectCuisine(value: string) {
    setCuisine(value);
    setMoodId(null);
  }

  function selectPrice(level: number) {
    setPrice((prev) => (prev === level ? null : level));
    setMoodId(null);
  }

  function handleClear() {
    setCollectionTab('all');
    setCuisine('');
    setPrice(null);
    setSort('rating');
    setMoodId(null);
    clearFilter();
  }

  const filtered = useMemo(() => {
    const activeMood = moodId ? moods.find((m) => m.id === moodId) ?? null : null;

    const list = data.venues.filter(
      (v) =>
        (collectionTab === 'all' || v.collection === collectionTab) &&
        (!cuisine || v.cuisine.en === cuisine) &&
        (!price || v.priceLevel === price) &&
        (!activeMood || activeMood.matches(v)),
    );

    return [...list].sort((a, b) => {
      switch (sort) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'price_asc':
          if (a.priceLevel == null && b.priceLevel == null) return 0;
          if (a.priceLevel == null) return 1;
          if (b.priceLevel == null) return -1;
          return a.priceLevel - b.priceLevel;
        case 'price_desc':
          if (a.priceLevel == null && b.priceLevel == null) return 0;
          if (a.priceLevel == null) return 1;
          if (b.priceLevel == null) return -1;
          return b.priceLevel - a.priceLevel;
      }
    });
  }, [collectionTab, cuisine, price, moodId, sort]);

  const visibleVenues = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="explore" className="explore">
      <div className="explore__header">
        <h2 className="explore__title">{t('explore_title')}</h2>
        <span className="explore__count">{t('results_count', { count: filtered.length })}</span>
      </div>

      <div className="explore__tabs">
        <button
          className={`explore__tab${collectionTab === 'all' ? ' explore__tab--active' : ''}`}
          onClick={() => selectCollectionTab('all')}
        >
          {t('nav_all')}
        </button>
        {collections.map((c) => (
          <button
            key={c.id}
            className={`explore__tab${collectionTab === c.id ? ' explore__tab--active' : ''}`}
            onClick={() => selectCollectionTab(c.id)}
          >
            {c.name[lang]}
          </button>
        ))}
      </div>

      <div className="explore__filters">
        <select
          className="explore__select"
          value={cuisine}
          onChange={(e) => selectCuisine(e.target.value)}
        >
          <option value="">{t('filter_cuisine')}</option>
          {data.filters.cuisines.map((c) => (
            <option key={c} value={c}>
              {getCuisineLabel(c, lang)}
            </option>
          ))}
        </select>

        <div className="explore__price-group">
          {[1, 2, 3, 4].map((level) => (
            <button
              key={level}
              className={`explore__price-btn${price === level ? ' explore__price-btn--active' : ''}`}
              onClick={() => selectPrice(level)}
            >
              {'€'.repeat(level)}
            </button>
          ))}
        </div>

        <select
          className="explore__select"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
        >
          <option value="rating">{t('sort_rating')}</option>
          <option value="reviews">{t('sort_reviews')}</option>
          <option value="price_asc">{t('sort_price_asc')}</option>
          <option value="price_desc">{t('sort_price_desc')}</option>
        </select>

        <button className="explore__clear" onClick={handleClear}>
          {t('clear_filters')}
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="explore__empty">
          <p className="explore__empty-text">{t('no_results')}</p>
          <button className="explore__show-all" onClick={handleClear}>
            {t('show_all')}
          </button>
        </div>
      ) : (
        <>
          <div className="venue-grid" ref={gridRef}>
            {visibleVenues.map((v) => (
              <VenueCard key={v.id} venue={v} />
            ))}
          </div>

          {hasMore && (
            <div className="show-more-wrapper">
              <p className="show-more-count">
                {t('showing_count', { shown: visibleCount, total: filtered.length })}
              </p>
              <button
                className="show-more-btn"
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              >
                {t('show_more')}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Explore;
