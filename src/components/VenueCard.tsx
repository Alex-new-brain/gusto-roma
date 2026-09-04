import { useLang } from '../hooks/useLang';
import { getCuisineLabel } from '../lib/cuisine';
import { buildVenueMapsUrl } from '../lib/maps';
import StarRating from './StarRating';
import type { Venue, DataLang } from '../types';
import '../styles/blocks/VenueCard.css';

function VenueCard({ venue }: { venue: Venue }) {
  const { lang, t } = useLang();
  const dataLang: DataLang = lang === 'ru' ? 'ru' : 'en';

  return (
    <article className="venue-card">
      {venue.temporarilyClosed && <span className="venue-card__closed">{t('closed_badge')}</span>}

      <h3 className="venue-card__name">{venue.name}</h3>

      <div className="venue-card__meta-row">
        {/* The 2 temporarily-closed venues have no real cuisine/price data in the source —
            skip the badge rather than show the placeholder that's stored there. */}
        {!venue.temporarilyClosed && (
          <span className={`venue-badge venue-badge--${venue.collection}`}>
            {getCuisineLabel(venue.cuisine.en, lang)}
          </span>
        )}
        {venue.priceRange && (
          <span className="venue-card__price">
            <span className="venue-card__price-range">{venue.priceRange}</span>
            <span className="venue-card__price-level">{venue.priceBadge}</span>
          </span>
        )}
      </div>

      <div className="venue-card__rating-row">
        <StarRating rating={venue.rating} />
        <span className="venue-card__rating-value">{venue.rating}</span>
        <span className="venue-card__reviews">
          ({venue.reviews.toLocaleString(dataLang === 'ru' ? 'ru-RU' : 'en-US')} {t('reviews_suffix')})
        </span>
      </div>

      <div className="venue-card__footer">
        <a
          className="venue-card__maps-btn"
          href={buildVenueMapsUrl(venue.name)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('open_maps')} ↗
        </a>
      </div>
    </article>
  );
}

export default VenueCard;
