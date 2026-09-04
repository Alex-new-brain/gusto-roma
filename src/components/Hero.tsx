import { useLang } from '../hooks/useLang';
import { scrollToElement } from '../lib/lenis';
import venuesData from '../data/venues.json';
import type { VenuesData } from '../types';
import '../styles/blocks/Hero.css';

const data = venuesData as VenuesData;
const openVenuesCount = data.venues.filter((v) => !v.temporarilyClosed).length;

function Hero() {
  const { t } = useLang();

  return (
    <section className="hero">
      <div className="hero__photo">
        <img
          className="hero__photo-img"
          src="/eugene.jpg"
          alt="Eugene holding a cocktail, surrounded by greenery"
        />
        <div className="hero__photo-overlay" />
        <h1 className="hero__photo-title">{t('hero_title')}</h1>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">{t('hero_eyebrow')}</p>
        <p className="hero__subtitle">{t('hero_subtitle')}</p>
        <p className="hero__byline">{t('hero_byline')}</p>
        <p className="hero__stat">{t('hero_stat', { count: openVenuesCount })}</p>

        <button className="hero__cta" onClick={() => scrollToElement('collections')}>
          {t('hero_cta')}
        </button>

        <span className="hero__scroll" aria-hidden="true">
          ↓
        </span>
      </div>
    </section>
  );
}

export default Hero;
