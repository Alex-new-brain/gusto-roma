import type { Lang } from '../types';

export type TranslationKey =
  | 'nav_home'
  | 'nav_eat'
  | 'nav_hidden'
  | 'nav_drink'
  | 'nav_feel'
  | 'nav_explore'
  | 'nav_about'
  | 'lang_label'
  | 'hero_eyebrow'
  | 'hero_title'
  | 'hero_subtitle'
  | 'hero_byline'
  | 'hero_stat'
  | 'hero_cta'
  | 'why_title'
  | 'why_p1'
  | 'why_p2'
  | 'why_p3'
  | 'curator_eyebrow'
  | 'curator_name'
  | 'curator_role'
  | 'curator_fact'
  | 'curator_bio'
  | 'collections_title'
  | 'places_label'
  | 'cta_open_map'
  | 'cta_browse_places'
  | 'mood_title'
  | 'mood_clear_label'
  | 'lucky_prefix'
  | 'lucky_button'
  | 'lucky_collection_prefix'
  | 'lucky_open_maps'
  | 'lucky_try_again'
  | 'explore_title'
  | 'nav_all'
  | 'filter_cuisine'
  | 'sort_rating'
  | 'sort_reviews'
  | 'sort_price_asc'
  | 'sort_price_desc'
  | 'open_maps'
  | 'reviews_suffix'
  | 'results_count'
  | 'clear_filters'
  | 'no_results'
  | 'show_all'
  | 'closed_badge'
  | 'footer_line1'
  | 'footer_line2'
  | 'footer_by'
  | 'footer_role'
  | 'footer_donate'
  | 'showing_count'
  | 'show_more'
  | 'mood_step1_title'
  | 'mood_eat'
  | 'mood_drink'
  | 'mood_experience'
  | 'mood_step2_eat'
  | 'mood_classic'
  | 'mood_different'
  | 'mood_cheap'
  | 'mood_step2_drink'
  | 'mood_cocktails'
  | 'mood_view'
  | 'mood_good_bar'
  | 'mood_step2_exp'
  | 'mood_music'
  | 'mood_culture'
  | 'mood_surprise';

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  en: {
    nav_home: 'Home',
    nav_eat: 'Eat',
    nav_hidden: 'Hidden',
    nav_drink: 'Drink',
    nav_feel: 'Feel',
    nav_explore: 'Explore',
    nav_about: 'About',
    lang_label: 'English',
    hero_eyebrow: "Eugene's personal selection",
    hero_title: 'Rome, Worth the Taste',
    hero_subtitle: 'A personal guide to eating, drinking & experiencing Rome.',
    hero_byline: 'Curated by someone who knows the city from behind the bar.',
    hero_stat: '4 collections · {count} places · one very personal selection',
    hero_cta: 'Explore the guide',
    why_title: 'Why this guide?',
    why_p1: 'Rome has thousands of places to eat, drink and go out.',
    why_p2: "This isn't a list of the most popular ones.",
    why_p3:
      "It's a collection of places that made someone who works in hospitality stop, look around and save them.",
    curator_eyebrow: 'Meet the curator',
    curator_name: 'Eugene Husiev',
    curator_role: 'Senior Bartender · Mixologist · Rome',
    curator_fact: '10+ years in hospitality · 5-star hotels · 50 Best Bars',
    curator_bio:
      'Years behind the bar, working with guests, drinks and restaurants give you a different eye for places. Service. Atmosphere. People. Details. The kind of experience that turns into recommendations worth trusting.',
    collections_title: 'Four ways to experience Rome',
    places_label: 'places',
    cta_open_map: 'Open all on map',
    cta_browse_places: 'Browse places',
    mood_title: 'What kind of night are you looking for?',
    mood_clear_label: 'Clear',
    lucky_prefix: 'or just...',
    lucky_button: "I'm feeling lucky",
    lucky_collection_prefix: 'From the',
    lucky_open_maps: 'Open in Google Maps',
    lucky_try_again: 'Try again',
    explore_title: 'Explore',
    nav_all: 'All',
    filter_cuisine: 'Cuisine',
    sort_rating: 'Top rated',
    sort_reviews: 'Most reviewed',
    sort_price_asc: 'Cheapest first',
    sort_price_desc: 'Priciest first',
    open_maps: 'Maps',
    reviews_suffix: 'reviews',
    results_count: '{count} places',
    clear_filters: 'Clear',
    no_results: 'No places match',
    show_all: 'Show all',
    closed_badge: 'Temporarily closed',
    footer_line1: 'Rome is full of places.',
    footer_line2: 'These are the ones worth remembering.',
    footer_by: 'Curated by',
    footer_role: 'Rome · Hospitality · Bartender',
    footer_donate: 'Support this guide',
    showing_count: '{shown} of {total} places',
    show_more: 'Show more',
    mood_step1_title: 'Tonight, you want to...',
    mood_eat: 'Eat',
    mood_drink: 'Drink',
    mood_experience: 'Experience',
    mood_step2_eat: "What's the mood?",
    mood_classic: 'Something classic',
    mood_different: 'Something different',
    mood_cheap: 'Keep it cheap',
    mood_step2_drink: 'What are you after?',
    mood_cocktails: 'Cocktails & secrets',
    mood_view: 'A view',
    mood_good_bar: 'Just a good bar',
    mood_step2_exp: 'What kind?',
    mood_music: 'Music & nightlife',
    mood_culture: 'Culture',
    mood_surprise: 'Surprise me',
  },
  ru: {
    nav_home: 'Главная',
    nav_eat: 'Еда',
    nav_hidden: 'Секретные',
    nav_drink: 'Напитки',
    nav_feel: 'Атмосфера',
    nav_explore: 'Каталог',
    nav_about: 'Об авторе',
    lang_label: 'Русский',
    hero_eyebrow: 'Персональная подборка Eugene',
    hero_title: 'Вкус настоящего Рима',
    hero_subtitle: 'Личный гид по еде, напиткам и жизни Рима.',
    hero_byline: 'Составлен человеком, который знает город с другой стороны бара.',
    hero_stat: '4 коллекции · {count} мест · один очень личный выбор',
    hero_cta: 'Исследовать гид',
    why_title: 'Почему этот гид?',
    why_p1: 'В Риме тысячи мест, где можно поесть, выпить и провести вечер.',
    why_p2: 'Это не список самых популярных заведений.',
    why_p3:
      'Это коллекция мест, которые заставили человека из мира hospitality остановиться, оглянуться и сохранить их для себя.',
    curator_eyebrow: 'Знакомьтесь с автором',
    curator_name: 'Eugene Husiev',
    curator_role: 'Старший бартендер · Миксолог · Рим',
    curator_fact: '10+ лет в hospitality · 5-звёздочные отели · 50 Best Bars',
    curator_bio:
      'Годы за баром, работа с гостями, напитками и ресторанами дают особый взгляд на места. Сервис. Атмосфера. Люди. Детали. Та самая насмотренность, которая превращается в рекомендации, которым можно доверять.',
    collections_title: 'Четыре способа узнать Рим',
    places_label: 'мест',
    cta_open_map: 'Все на карте',
    cta_browse_places: 'Смотреть места',
    mood_title: 'Какого вечера вам хочется?',
    mood_clear_label: 'Сбросить',
    lucky_prefix: 'или просто...',
    lucky_button: 'Мне повезёт',
    lucky_collection_prefix: 'Из коллекции',
    lucky_open_maps: 'Открыть в Google Maps',
    lucky_try_again: 'Ещё раз',
    explore_title: 'Каталог',
    nav_all: 'Все',
    filter_cuisine: 'Кухня',
    sort_rating: 'По рейтингу',
    sort_reviews: 'По отзывам',
    sort_price_asc: 'Сначала дешёвые',
    sort_price_desc: 'Сначала дорогие',
    open_maps: 'Карта',
    reviews_suffix: 'отзывов',
    results_count: '{count} мест',
    clear_filters: 'Сброс',
    no_results: 'Ничего не найдено',
    show_all: 'Показать все',
    closed_badge: 'Временно закрыто',
    footer_line1: 'В Риме тысячи мест.',
    footer_line2: 'Но именно эти стоит запомнить.',
    footer_by: 'Составлено',
    footer_role: 'Рим · Hospitality · Бармен',
    footer_donate: 'Поддержать гид',
    showing_count: '{shown} из {total} мест',
    show_more: 'Показать ещё',
    mood_step1_title: 'Сегодня вечером хочется...',
    mood_eat: 'Поесть',
    mood_drink: 'Выпить',
    mood_experience: 'Почувствовать',
    mood_step2_eat: 'Какое настроение?',
    mood_classic: 'Что-то классическое',
    mood_different: 'Что-то необычное',
    mood_cheap: 'Бюджетно',
    mood_step2_drink: 'Чего хочется?',
    mood_cocktails: 'Коктейли и секреты',
    mood_view: 'Красивый вид',
    mood_good_bar: 'Просто хороший бар',
    mood_step2_exp: 'Какого рода?',
    mood_music: 'Музыка и ночная жизнь',
    mood_culture: 'Культура',
    mood_surprise: 'Удиви меня',
  },
  it: {
    nav_home: 'Home',
    nav_eat: 'Cibo',
    nav_hidden: 'Nascosti',
    nav_drink: 'Drink',
    nav_feel: 'Atmosfera',
    nav_explore: 'Esplora',
    nav_about: "L'autore",
    lang_label: 'Italiano',
    hero_eyebrow: 'La selezione personale di Eugene',
    hero_title: 'Roma da Gustare',
    hero_subtitle: 'Una guida personale per mangiare, bere e vivere Roma.',
    hero_byline: 'Curato da chi conosce la città da dietro il bancone.',
    hero_stat: '4 collezioni · {count} posti · una selezione molto personale',
    hero_cta: 'Esplora la guida',
    why_title: 'Perché questa guida?',
    why_p1: 'Roma ha migliaia di posti dove mangiare, bere e uscire.',
    why_p2: 'Questa non è una lista dei posti più popolari.',
    why_p3:
      "È una collezione di posti che hanno fatto fermare, guardarsi intorno e salvarli a qualcuno che lavora nell'ospitalità.",
    curator_eyebrow: "L'autore",
    curator_name: 'Eugene Husiev',
    curator_role: 'Senior Bartender · Mixologist · Roma',
    curator_fact: "10+ anni nell'ospitalità · hotel 5 stelle · 50 Best Bars",
    curator_bio:
      "Anni dietro al bancone, lavorando con ospiti, drink e ristoranti, danno uno sguardo diverso sui posti. Servizio. Atmosfera. Persone. Dettagli. L'esperienza che si trasforma in raccomandazioni di cui fidarsi.",
    collections_title: 'Quattro modi per vivere Roma',
    places_label: 'posti',
    cta_open_map: 'Tutti sulla mappa',
    cta_browse_places: 'Sfoglia i posti',
    mood_title: 'Che tipo di serata stai cercando?',
    mood_clear_label: 'Cancella',
    lucky_prefix: 'oppure...',
    lucky_button: 'Mi sento fortunato',
    lucky_collection_prefix: 'Dalla collezione',
    lucky_open_maps: 'Apri in Google Maps',
    lucky_try_again: 'Riprova',
    explore_title: 'Esplora',
    nav_all: 'Tutti',
    filter_cuisine: 'Cucina',
    sort_rating: 'Più votati',
    sort_reviews: 'Più recensiti',
    sort_price_asc: 'Prima i più economici',
    sort_price_desc: 'Prima i più costosi',
    open_maps: 'Mappa',
    reviews_suffix: 'recensioni',
    results_count: '{count} posti',
    clear_filters: 'Pulisci',
    no_results: 'Nessun risultato',
    show_all: 'Mostra tutti',
    closed_badge: 'Chiuso temporaneamente',
    footer_line1: 'Roma è piena di posti.',
    footer_line2: 'Questi sono quelli da ricordare.',
    footer_by: 'Curato da',
    footer_role: 'Roma · Hospitality · Bartender',
    footer_donate: 'Supporta la guida',
    showing_count: '{shown} di {total} posti',
    show_more: 'Mostra altri',
    mood_step1_title: 'Stasera, vuoi...',
    mood_eat: 'Mangiare',
    mood_drink: 'Bere',
    mood_experience: 'Vivere',
    mood_step2_eat: 'Che atmosfera?',
    mood_classic: 'Qualcosa di classico',
    mood_different: 'Qualcosa di diverso',
    mood_cheap: 'Spendere poco',
    mood_step2_drink: 'Cosa cerchi?',
    mood_cocktails: 'Cocktail & segreti',
    mood_view: 'Una vista',
    mood_good_bar: 'Solo un buon bar',
    mood_step2_exp: 'Di che tipo?',
    mood_music: 'Musica & vita notturna',
    mood_culture: 'Cultura',
    mood_surprise: 'Sorprendimi',
  },
  ua: {
    nav_home: 'Головна',
    nav_eat: 'Їжа',
    nav_hidden: 'Приховані',
    nav_drink: 'Напої',
    nav_feel: 'Атмосфера',
    nav_explore: 'Каталог',
    nav_about: 'Про автора',
    lang_label: 'Українська',
    hero_eyebrow: 'Персональна добірка Eugene',
    hero_title: 'Смак справжнього Рима',
    hero_subtitle: 'Особистий гід по їжі, напоях та життю Рима.',
    hero_byline: 'Створено людиною, яка знає місто з іншого боку бару.',
    hero_stat: '4 колекції · {count} місць · один дуже особистий вибір',
    hero_cta: 'Дослідити гід',
    why_title: 'Чому цей гід?',
    why_p1: 'У Римі тисячі місць, де можна поїсти, випити та провести вечір.',
    why_p2: 'Це не список найпопулярніших закладів.',
    why_p3:
      'Це колекція місць, які змусили людину зі світу hospitality зупинитися, озирнутися та зберегти їх для себе.',
    curator_eyebrow: 'Знайомтесь з автором',
    curator_name: 'Eugene Husiev',
    curator_role: 'Старший бартендер · Міксолог · Рим',
    curator_fact: '10+ років у hospitality · 5-зіркові готелі · 50 Best Bars',
    curator_bio:
      "Роки за баром, робота з гостями, напоями та ресторанами дають особливий погляд на місця. Сервіс. Атмосфера. Люди. Деталі. Та сама насмотреність, яка перетворюється на рекомендації, яким можна довіряти.",
    collections_title: 'Чотири способи пізнати Рим',
    places_label: 'місць',
    cta_open_map: 'Всі на мапі',
    cta_browse_places: 'Переглянути місця',
    mood_title: 'Якого вечора вам хочеться?',
    mood_clear_label: 'Скасувати',
    lucky_prefix: 'або просто...',
    lucky_button: 'Мені пощастить',
    lucky_collection_prefix: 'З колекції',
    lucky_open_maps: 'Відкрити в Google Maps',
    lucky_try_again: 'Ще раз',
    explore_title: 'Каталог',
    nav_all: 'Всі',
    filter_cuisine: 'Кухня',
    sort_rating: 'За рейтингом',
    sort_reviews: 'За відгуками',
    sort_price_asc: 'Спочатку дешеві',
    sort_price_desc: 'Спочатку дорогі',
    open_maps: 'Мапа',
    reviews_suffix: 'відгуків',
    results_count: '{count} місць',
    clear_filters: 'Скинути',
    no_results: 'Нічого не знайдено',
    show_all: 'Показати всі',
    closed_badge: 'Тимчасово зачинено',
    footer_line1: 'У Римі тисячі місць.',
    footer_line2: "Але саме ці варто запам'ятати.",
    footer_by: 'Створено',
    footer_role: 'Рим · Hospitality · Бармен',
    footer_donate: 'Підтримати гід',
    showing_count: '{shown} з {total} місць',
    show_more: 'Показати ще',
    mood_step1_title: 'Сьогодні ввечері хочеться...',
    mood_eat: 'Поїсти',
    mood_drink: 'Випити',
    mood_experience: 'Відчути',
    mood_step2_eat: 'Який настрій?',
    mood_classic: 'Щось класичне',
    mood_different: 'Щось незвичне',
    mood_cheap: 'Бюджетно',
    mood_step2_drink: 'Чого хочеться?',
    mood_cocktails: 'Коктейлі та секрети',
    mood_view: 'Гарний вид',
    mood_good_bar: 'Просто гарний бар',
    mood_step2_exp: 'Якого роду?',
    mood_music: 'Музика та нічне життя',
    mood_culture: 'Культура',
    mood_surprise: 'Здивуй мене',
  },
};
