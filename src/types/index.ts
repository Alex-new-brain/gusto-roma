export type Lang = 'en' | 'ru' | 'it' | 'ua';

export type DataLang = 'en' | 'ru';

export type LocalizedText = Record<DataLang, string>;

export type CollectionId = 'eat' | 'hidden' | 'drink' | 'feel';

export type LocalizedText4 = Record<Lang, string>;

export interface Venue {
  id: number;
  name: string;
  collection: CollectionId;
  collectionName: LocalizedText;
  cuisine: LocalizedText;
  rating: number;
  reviews: number;
  priceRange: string;
  priceLevel: number;
  priceBadge: string;
  temporarilyClosed: boolean;
  googleMapsQuery: string;
  googleMapsUrl: string;
}

export interface Collection {
  id: CollectionId;
  name: LocalizedText;
  fullName: LocalizedText;
  tagline: LocalizedText;
  number: string;
  icon: string;
}

export interface PriceLevel {
  level: number;
  label: string;
  description: LocalizedText;
}

export interface Filters {
  cuisines: string[];
  priceLevels: PriceLevel[];
}

export interface Meta {
  title: LocalizedText;
  subtitle: LocalizedText;
  curator: {
    name: string;
    role: LocalizedText;
    photo: string | null;
  };
  totalVenues: number;
  lastUpdated: string;
}

export interface VenuesData {
  meta: Meta;
  collections: Collection[];
  venues: Venue[];
  filters: Filters;
}

/** Curated collection metadata for the Collections block — hardcoded, not sourced from venues.json. */
export interface CollectionMeta {
  id: CollectionId;
  number: string;
  icon: string;
  name: LocalizedText4;
  fullName: LocalizedText4;
  tagline: LocalizedText4;
  mapsUrl: string;
}

export type MoodId =
  | 'roman'
  | 'cocktails'
  | 'sunset'
  | 'secret'
  | 'budget'
  | 'music'
  | 'special'
  | 'eat_classic'
  | 'eat_different'
  | 'eat_cheap'
  | 'good_bar'
  | 'culture';

export interface Mood {
  id: MoodId;
  icon: string;
  label: LocalizedText4;
  matches: (venue: Venue) => boolean;
}
