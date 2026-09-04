import venuesData from '../data/venues.json';
import type { VenuesData, Lang } from '../types';

const data = venuesData as VenuesData;

/** cuisine.en -> cuisine.ru, built once from venue data (only en/ru exist in the source). */
const ruByEn: Record<string, string> = {};
for (const venue of data.venues) {
  if (!ruByEn[venue.cuisine.en]) {
    ruByEn[venue.cuisine.en] = venue.cuisine.ru;
  }
}

/**
 * Cuisine names only exist in en/ru in venues.json. For it/ua we fall back to the
 * English name rather than fabricating a translation that isn't in the source data.
 */
export function getCuisineLabel(cuisineEn: string, lang: Lang): string {
  return lang === 'ru' ? (ruByEn[cuisineEn] ?? cuisineEn) : cuisineEn;
}
