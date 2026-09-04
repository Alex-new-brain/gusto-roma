import type { CollectionMeta } from '../types';

export const collections: CollectionMeta[] = [
  {
    id: 'eat',
    number: '01',
    icon: '🍝',
    name: { en: 'Eat', ru: 'Еда', it: 'Mangiare', ua: 'Їжа' },
    fullName: {
      en: 'Restaurants & Cafés',
      ru: 'Рестораны и кафе',
      it: 'Ristoranti & Caffè',
      ua: 'Ресторани та кафе',
    },
    tagline: {
      en: 'From Roman classics to places worth crossing the city for.',
      ru: 'От римской классики до мест, ради которых стоит пересечь весь город.',
      it: 'Dai classici romani ai posti per cui vale la pena attraversare la città.',
      ua: 'Від римської класики до місць, заради яких варто перетнути все місто.',
    },
    mapsUrl: 'https://maps.app.goo.gl/SDVnvBckZuR5UH346',
  },
  {
    id: 'hidden',
    number: '02',
    icon: '🍸',
    name: { en: 'Hidden', ru: 'Секретные', it: 'Nascosti', ua: 'Таємні' },
    fullName: {
      en: 'Speakeasy & Cocktail Bars',
      ru: 'Спикизи и коктейль-бары',
      it: 'Speakeasy & Cocktail Bar',
      ua: 'Спікізі та коктейль-бари',
    },
    tagline: {
      en: "Doors you might walk past. Places you won't find by accident.",
      ru: 'Двери, мимо которых можно пройти. Места, которые случайно не найдёшь.',
      it: 'Porte davanti alle quali potresti passare. Posti che non trovi per caso.',
      ua: 'Двері, повз які можна пройти. Місця, які випадково не знайдеш.',
    },
    mapsUrl: 'https://maps.app.goo.gl/oSWcTZGCnsLkKhLP6',
  },
  {
    id: 'drink',
    number: '03',
    icon: '🌇',
    name: { en: 'Drink', ru: 'Напитки', it: 'Bere', ua: 'Напої' },
    fullName: {
      en: 'Bars & Rooftops',
      ru: 'Бары и террасы',
      it: 'Bar & Rooftop',
      ua: 'Бари та тераси',
    },
    tagline: {
      en: 'Aperitivo, rooftops, sunsets and late-night drinks.',
      ru: 'Аперитиво, крыши, закаты и напитки до поздней ночи.',
      it: 'Aperitivo, rooftop, tramonti e drink a tarda notte.',
      ua: 'Аперитиво, дахи, заходи сонця та напої до пізньої ночі.',
    },
    mapsUrl: 'https://maps.app.goo.gl/aK4MQQfru6nYZnT98',
  },
  {
    id: 'feel',
    number: '04',
    icon: '🎵',
    name: { en: 'Feel', ru: 'Атмосфера', it: 'Sentire', ua: 'Атмосфера' },
    fullName: {
      en: 'Music & Culture',
      ru: 'Музыка и культура',
      it: 'Musica & Cultura',
      ua: 'Музика та культура',
    },
    tagline: {
      en: 'Places for when you want to experience Rome beyond food and drinks.',
      ru: 'Места для тех случаев, когда хочется увидеть Рим за пределами еды и напитков.',
      it: 'Per quando vuoi vivere Roma oltre il cibo e i drink.',
      ua: 'Місця для тих випадків, коли хочеться побачити Рим за межами їжі та напоїв.',
    },
    mapsUrl: 'https://maps.app.goo.gl/Fdhxs3GWvoT8Vkg99',
  },
];
