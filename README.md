# Mission Meat Market

Static marketing site for **Mission Meat Market** — Rio Grande Valley carne seca, marinated fajitas, and Mexican market favorites. Built with Vite + vanilla JS/CSS, with English/Spanish toggle, sliding hero carousel of all 12 carne seca flavors, an interactive Flavors showcase, and an embedded Google Map.

> Live phone: **(956) 584-4866** · WhatsApp: **(956) 240-8484**

---

## Features

- **Sliding hero carousel** — auto-advances every 3 seconds with seamless loop, swipe, keyboard arrows, prev/next, dot pagination, and a progress bar. Pauses on hover/focus and when the tab is hidden.
- **Flavors showcase** — tabbed gallery of the 12 carne seca varieties (Sasón Original, Lemon Pepper, Tajín, Habanero, Chile de Árbol, Hot Flamas, Red Taki, Azul, Zombie, Pickle con Chile, Pica Chelada, Miche Mission). Auto-advances every ~4.5s; clicking a chip pins it for 8s.
- **EN / ES toggle** — full UI translation, persisted in `localStorage` and pre-detected from `navigator.language`.
- **Click-to-call & WhatsApp** — `tel:` and `wa.me/` links, both wired from a single config file.
- **Google Maps embed** — no API key required (uses `maps.google.com/maps?q=...&output=embed`).
- **Shop marquee** — auto-scrolling band of in-store photos, pauses on hover.
- **Animated reveals** — `IntersectionObserver`-based fade/slide-in with staggered delays, all gated behind `prefers-reduced-motion`.
- **Accessible** — skip link, focus-visible outlines, keyboard nav for hero, ARIA roles/labels on tabs/dots, reduced-motion fallbacks.

---

## Stack

| Layer | Choice |
| --- | --- |
| Build | [Vite 8](https://vitejs.dev/) (vanilla template) |
| Language | JavaScript (ES modules) |
| Styling | Hand-written CSS with custom properties for colors, spacing, easing, and durations |
| i18n | Tiny in-house store (`src/i18n.js`) — no runtime dependency |
| Hosting | [Vercel](https://vercel.com/) (`vercel.json` included) |

No frameworks, no UI libraries, no analytics.

---

## Project structure

```
mission-meat-market/
├── public/
│   ├── logo.png
│   ├── favicon.svg
│   ├── hero/                # in-store photos used in shop marquee
│   └── flavors/             # 12 carne seca product photos + variety hero
├── src/
│   ├── main.js              # entrypoint (carousel, flavors, marquee, contact, map)
│   ├── style.css            # tokens + components
│   ├── config.js            # phone, WhatsApp, address, image paths, socials
│   └── i18n.js              # EN/ES strings + applyLanguage()
├── index.html
├── vercel.json              # Vercel framework + cache headers
├── package.json
└── README.md
```

---

## Configuration

All business-specific values live in [`src/config.js`](src/config.js):

```js
export const config = {
  siteName: 'Mission Meat Market',
  phoneDisplay: '(956) 584-4866',
  phoneTel: '19565844866',           // tel:+1...
  whatsappE164: '19562408484',       // https://wa.me/...
  addressLine: 'Mission, TX',
  mapQuery: 'Mission Meat Market, Mission, TX',
  socials: {
    instagram: '',
    facebook: '',
    tiktok: '',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Mission+Meat+Market+Mission+TX',
  },
  flavorImages: [ /* 12 entries */ ],
  heroImageUrls: [ /* 12 entries — defaults to flavor close-ups */ ],
  shopPhotos:    [ /* 4 in-store photos */ ],
  logoPath: '/logo.png',
}
```

Replacing photos: drop new files into `public/flavors/` (keep the same filenames) — no other changes needed.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:5173/ (or 5174 if busy)
npm run build        # outputs dist/
npm run preview      # serves the production build locally
```

Requires Node 20+.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import** the repo.
3. Vercel auto-detects Vite; `vercel.json` already pins:
   - Build command: `npm run build`
   - Output directory: `dist`
   - 1-year cache for `/flavors/*.png` and `/hero/*.png`
4. Click **Deploy**. No environment variables required.

---

## Translations

Add or edit strings in [`src/i18n.js`](src/i18n.js). Each key has `{ en, es }`. Reference strings in HTML with:

- `data-i18n="key"` for plain text
- `data-i18n-html="key"` if the value contains markup (e.g. `<strong>`)
- `data-i18n-aria="key"` to set `aria-label`

Switching languages dispatches a `mmm:langchange` event so dynamic widgets (carousel, flavor tabs) can re-render their labels.

---

## License

Private project for Mission Meat Market. All photography and branding © Mission Meat Market.
