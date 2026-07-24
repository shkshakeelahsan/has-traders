# has-traders

Company website for HAS Traders (SMC-Private) Limited. Eight static pages built
with Astro 7 + Tailwind 4. Content is transcribed from the company profile deck.

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Dev server on `localhost:4321`            |
| `npm run build`   | Build static site to `./dist/`            |
| `npm run preview` | Serve `./dist/` locally                   |
| `npm run format`  | Format with Prettier (Astro + Tailwind)   |

## Editing content

Two files hold everything writable — pages contain no copy of their own.

- `src/site.ts` — company name, tagline, phone numbers, email, navigation
- `src/data/content.ts` — about, values, certificates, clients, sector ledger,
  services, projects, footprint cities, leadership

Change a phone number in `src/site.ts` and it updates the header, footer and
contact page at once. Add a city to `FOOTPRINT` and the counts on the home and
footprint pages recalculate on the next build.

## Pages

| Route         | Source of content                                  |
| ------------- | -------------------------------------------------- |
| `/`           | Positioning, capabilities, scale, clients, work     |
| `/about/`     | Company intro, vision, mission, values, certificates|
| `/clients/`   | Client list and the sector ledger table             |
| `/services/`  | Five service lines with partner attribution         |
| `/projects/`  | Nine delivered programmes                           |
| `/footprint/` | Coverage map and cities by region                   |
| `/leadership/`| Leadership team and narrative                       |
| `/contact/`   | Phones, email, web                                  |

## Design system

Tokens live in the `@theme` block of `src/styles/global.css` and are used as
Tailwind utilities:

- `crimson` (`#b60b2c`) — sampled from the falcon mark, the only accent colour
- `crimson-tint` — the crimson substitute for navy backgrounds, where the full
  strength colour only reaches 2.5:1 contrast
- `navy`, `paper`, `surface`, `ink`, `mute`, `rule` — structure and text
- One typeface, Roboto, with weight as the contrast device. Two component
  classes carry the small-caps labels: `.eyebrow` and `.label`.

Sections on a crimson or navy background take an `.on-crimson` / `.on-navy`
class, which switches the focus ring to white so it stays visible.

Fonts are self-hosted via `@fontsource`, so pages make no external requests.
No client-side JavaScript ships — the mobile menu is a native `<details>`
disclosure.

## SEO

`astro.config.mjs` sets `site: "https://www.hastraders.com"`. Canonical tags,
Open Graph URLs, the sitemap and `public/robots.txt` all derive from that host,
so **if the site is served from a different origin, change it in both places**
(`astro.config.mjs` and `robots.txt`) or every canonical will point at the wrong
domain.

- `Organization` JSON-LD is emitted from `src/layouts/Base.astro`, built from
  `site.ts` and `content.ts`. It deliberately does not claim ISO 9001 — that
  certificate belongs to DESI HATTI, the catering partner.
- `public/og-image.png` (1200×630) is the social share card.
- `@astrojs/sitemap` writes `sitemap-index.xml` at build time.

## Images

Source assets were extracted from the profile deck and optimised into
`public/img/` as WebP. To regenerate or add images, drop the originals in and
match the existing sizes: projects 16:10 at 1000px, portraits square at 640px.

## Deploy

`npm run build` produces `dist/` — static HTML, CSS, fonts and images. Upload it
anywhere: Vercel, Netlify, Cloudflare Pages, GitHub Pages or an nginx docroot.
No Node runtime needed in production.

Set the live domain in `astro.config.mjs` so canonical and Open Graph URLs are
absolute:

```js
export default defineConfig({
  site: "https://hastraders.com",
  // ...
});
```
