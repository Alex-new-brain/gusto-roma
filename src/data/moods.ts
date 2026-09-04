import type { Mood } from '../types';

export const moods: Mood[] = [
  {
    id: 'roman',
    icon: '🍝',
    label: {
      en: 'Eat like a Roman',
      ru: 'Поесть как римлянин',
      it: 'Mangiare come un romano',
      ua: 'Поїсти як римлянин',
    },
    matches: (venue) =>
      ['Roman', 'Italian', 'Pasta', 'Pizza'].includes(venue.cuisine.en),
  },
  {
    id: 'cocktails',
    icon: '🍸',
    label: {
      en: 'Great cocktails',
      ru: 'Отличные коктейли',
      it: 'Ottimi cocktail',
      ua: 'Чудові коктейлі',
    },
    matches: (venue) => ['Cocktail Bar', 'Bar'].includes(venue.cuisine.en),
  },
  {
    id: 'sunset',
    icon: '🌅',
    label: {
      en: 'A beautiful view',
      ru: 'Красивый вид',
      it: 'Una bella vista',
      ua: 'Гарний вид',
    },
    matches: (venue) => venue.collection === 'drink',
  },
  {
    id: 'secret',
    icon: '🕵️',
    label: {
      en: 'Somewhere secret',
      ru: 'Что-то секретное',
      it: 'Un posto segreto',
      ua: 'Щось таємне',
    },
    matches: (venue) => venue.collection === 'hidden',
  },
  {
    id: 'budget',
    icon: '💰',
    label: {
      en: 'Budget-friendly',
      ru: 'Бюджетно',
      it: 'Economico',
      ua: 'Бюджетно',
    },
    matches: (venue) => venue.priceLevel === 1,
  },
  {
    id: 'music',
    icon: '🎶',
    label: {
      en: 'Music & nightlife',
      ru: 'Музыка и ночная жизнь',
      it: 'Musica & vita notturna',
      ua: 'Музика та нічне життя',
    },
    matches: (venue) => venue.collection === 'feel',
  },
  {
    id: 'special',
    icon: '✨',
    label: {
      en: 'A special night',
      ru: 'Особенный вечер',
      it: 'Una serata speciale',
      ua: 'Особливий вечір',
    },
    matches: (venue) =>
      (venue.priceLevel >= 3 && venue.rating >= 4.4) || venue.collection === 'drink',
  },
];
