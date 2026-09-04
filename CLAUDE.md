# Roma After Dark — Project Context

## What is this?

A personal digital city guide to Rome, created as a gift for a friend named Eugene.
Eugene is a bartender who has lived in Rome for 5+ years and curated 4 Google Maps lists
of his favourite places to eat, drink, and experience the city.

This is NOT a tourist guide. It's a personal, editorial, cinematic web experience
that presents Eugene's selections in a beautiful way.

## Tech stack

- **Vite + React** (no Next.js — static site, simpler)
- **TypeScript**
- **CSS Modules** or plain CSS (no Tailwind — we want full control over the editorial design)
- **Montserrat** font only (Google Fonts, weights: 300, 400, 500, 600, 700, 800)
- **No backend** — all data in local JSON
- **Deploy target**: Vercel (static)

## Design direction

**Warm editorial / Roman terrace / Skyline Bar Venice reference**

Reference: https://skylinebarvenice.it/

NOT: tourist guide, restaurant database, Google Maps clone, typical Italian clichés (flags, Colosseum, Vespa, pasta photos), dark cinematic theme (superseded)

IS: warm, sunlit, editorial, personal, each collection with its own identity color

### Color palette
```
/* Base */
--bg: #FAF6F0;              /* warm cream background (primary) */
--text: #2C1810;            /* dark brown text */
--text-soft: #6B5B4E;       /* soft brown for secondary text */
--text-on-color: #F5EDDA;   /* cream text on colored sections */
--border: #DDD5C8;          /* warm beige border */

/* 4 Collection colors — each collection has its own color */
--color-eat: #7A7B42;       /* olive / moss green */
--color-hidden: #C9A043;    /* mustard gold */
--color-drink: #B8CCC5;     /* muted sage / grey-blue */
--color-feel: #9E4B32;      /* terracotta / brick */

/* UI */
--accent: #9E4B32;          /* terracotta as primary accent */
--surface: #FFFFFF;         /* cards */
--surface-hover: #F5F0E8;
--gold: #C9A043;            /* ratings, price badges */
--nav-bg: rgba(250,246,240,0.92); /* translucent nav */
```

### Typography
- **Two typefaces**:
  - **Playfair Display** (400, 700) — serif, editorial, used ONLY for giant section headlines (Hero title, collection names, big section titles)
  - **Montserrat** (300, 400, 500, 600, 700) — everything else: body, UI, buttons, eyebrow, nav
- `--font-display: 'Playfair Display', Georgia, serif;`
- `--font-body: 'Montserrat', -apple-system, sans-serif;`
- Headlines: Playfair Display 700, large sizes, clamp() responsive
- Subtitles: Montserrat 500–600
- Body: Montserrat 300–400
- UI elements: Montserrat 500
- Eyebrow labels: Montserrat 500, small size, letter-spacing 3-4px, uppercase

### Animation
- **Lenis** — inertia smooth scroll, wired globally in `main.tsx`
- **GSAP + ScrollTrigger** — basic fade-in / translateY reveal animations on scroll for section headlines and staggered content. Keep simple; a working static site beats a broken animated one.

### Layout principles
- Max content width: 1200px
- Generous whitespace
- Left-aligned or centered depending on block
- Mobile-first responsive
- Avoid: excessive borders, shadows, rounded corners
- Avoid: all-caps for anything except small eyebrow labels
- Avoid: numbered markers (01, 02, 03) as decoration — only if content is actually sequential
- One bold design move per section, everything else quiet

## Languages (4)

EN (default), RU, IT, UA

- All UI text must exist in all 4 languages
- Venue names are NOT translated (they're Italian)
- Cuisine types ARE translated
- Language switcher in nav: EN | RU | IT | UA

## Data

All venue data lives in `src/data/venues.json`.
4 collections, 95 venues total.

Each venue has: id, name, collection, cuisine (en/ru), rating, reviews, priceRange, priceLevel.

### Eugene's original Google Maps lists (MUST be preserved as direct links):
- Food: https://maps.app.goo.gl/SDVnvBckZuR5UH346
- Cocktails: https://maps.app.goo.gl/oSWcTZGCnsLkKhLP6
- Rooftops: https://maps.app.goo.gl/aK4MQQfru6nYZnT98
- Music: https://maps.app.goo.gl/Fdhxs3GWvoT8Vkg99

## Project structure

```
roma-after-dark/
├── CLAUDE.md
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   └── eugene.jpg          (curator photo — used in Hero fullwidth + Curator circular)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles/
│   │   ├── globals.css     (reset, variables, font import)
│   │   └── blocks/         (CSS per block)
│   ├── data/
│   │   ├── venues.json     (all 95 venues)
│   │   └── i18n.ts         (all translations, 4 languages)
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx              (Block 1)
│   │   ├── WhyAndCurator.tsx     (Block 2)
│   │   ├── Collections.tsx       (Block 3)
│   │   ├── MoodSelector.tsx      (Block 4)
│   │   ├── Explore.tsx           (Block 5)
│   │   ├── Footer.tsx            (Block 6)
│   │   ├── VenueCard.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── StarRating.tsx
│   ├── hooks/
│   │   └── useLang.ts
│   └── types/
│       └── index.ts
```

## Block structure

1. **Hero** — fullwidth Eugene photo (~70vh) with giant Playfair title overlay, stats + CTA on cream below
2. **Why + Curator** — explanation + Eugene's profile with real circular photo
3. **Collections** — 4 fullscreen (100vh), each its own collection color, with "Open all on map" + "Browse" buttons
4. **Mood Selector** — "What kind of night?" pill-shaped quick filters
5. **Explore** — full catalog with filters (collection, cuisine, price, sort)
6. **Footer** — closing statement + donate placeholder, inverted dark-on-cream section

## Important UX rules

1. Each collection card has TWO CTAs:
   - "Open all on map" → Eugene's original Google Maps list (all pins visible)
   - "Browse places" → scroll to Explore section filtered to that collection

2. Google Maps is the primary navigation layer. We don't build our own map.

3. Never fabricate curator notes, personal quotes, or reviews that don't exist in the data.

4. Venue count and filter counts must be computed from data, never hardcoded.

5. The site deliberately uses a warm cream (#FAF6F0) + terracotta (#9E4B32) palette per the Skyline Bar Venice reference (see Color palette above) — this is an intentional editorial choice, not the generic AI-default terracotta/cream combo. Don't drift toward other generic AI-default patterns (e.g. purple gradients, glassmorphism cards) beyond what's specified here.
