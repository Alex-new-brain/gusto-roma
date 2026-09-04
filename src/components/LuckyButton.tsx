import { useState } from 'react';
import { useLang } from '../hooks/useLang';
import { getCuisineLabel } from '../lib/cuisine';
import { buildVenueMapsUrl } from '../lib/maps';
import { collections } from '../data/collections';
import StarRating from './StarRating';
import venuesData from '../data/venues.json';
import type { VenuesData, Venue } from '../types';
import '../styles/blocks/LuckyButton.css';
import '../styles/blocks/VenueCard.css';

const data = venuesData as VenuesData;
const openVenues = data.venues.filter((v) => !v.temporarilyClosed);

function pickRandomVenue(): Venue {
  return openVenues[Math.floor(Math.random() * openVenues.length)];
}

function LuckyButton() {
  const { lang, t } = useLang();
  const [venue, setVenue] = useState<Venue | null>(null);

  function open() {
    setVenue(pickRandomVenue());
  }

  function tryAgain() {
    setVenue(pickRandomVenue());
  }

  function close() {
    setVenue(null);
  }

  const collection = venue ? collections.find((c) => c.id === venue.collection) : null;

  return (
    <section className="lucky">
      <div className="lucky__divider" />
      <p className="lucky__prefix">{t('lucky_prefix')}</p>
      <button className="lucky__button" onClick={open}>
        {t('lucky_button')}
      </button>
      <div className="lucky__divider lucky__divider--bottom" />

      {venue && (
        <div className="lucky-modal-overlay" onClick={close}>
          <div className="lucky-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lucky-modal__close" onClick={close} aria-label="Close">
              ✕
            </button>

            <h3 className="lucky-modal__name">{venue.name}</h3>

            <p className="lucky-modal__meta">
              {getCuisineLabel(venue.cuisine.en, lang)} · {venue.priceBadge}
            </p>

            <div className="lucky-modal__rating">
              <StarRating rating={venue.rating} />
              <span className="lucky-modal__rating-value">{venue.rating}</span>
              <span className="lucky-modal__reviews">
                {venue.reviews.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US')} {t('reviews_suffix')}
              </span>
            </div>

            {collection && (
              <p
                className="lucky-modal__collection"
                style={{ color: `var(--color-${collection.id})` }}
              >
                {t('lucky_collection_prefix')} {collection.name[lang]}
              </p>
            )}

            <a
              className="lucky-modal__maps-btn"
              href={buildVenueMapsUrl(venue.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('lucky_open_maps')}
            </a>

            <button className="lucky-modal__retry" onClick={tryAgain}>
              {t('lucky_try_again')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LuckyButton;
