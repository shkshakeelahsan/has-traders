# has-traders

Holding page for Has Traders. One static route that says the site is under
construction and gives a contact email. Built with Astro 7 + Tailwind 4, output
is plain static files.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Dev server on `localhost:4321`           |
| `npm run build`   | Build static site to `./dist/`           |
| `npm run preview` | Serve `./dist/` locally                  |

## Editing content

All copy that changes lives in `src/site.ts` — company name, contact email,
status line, meta title and description. Change it there, not in the page.

The **Updated** date on the page is stamped at build time. Rebuild to refresh it.

## Structure

```text
src/
├── layouts/Base.astro   # html shell, meta tags, favicon
├── pages/index.astro    # the holding page
├── styles/global.css    # design tokens + animations
└── site.ts              # editable content
public/favicon.svg
```

Design tokens (colors, fonts, type scale) are defined once in the `@theme` block
of `src/styles/global.css` and used as Tailwind utilities (`text-brass`,
`bg-ink`, `font-display`, …).

Fonts are self-hosted via `@fontsource`, so the page makes no external requests.

## Deploy

`npm run build` produces `dist/` — static HTML, CSS, fonts. Upload it anywhere:
Vercel, Netlify, Cloudflare Pages, GitHub Pages, or an nginx docroot. No Node
runtime needed in production.

If deploying to a fixed domain, set it in `astro.config.mjs` so canonical and
Open Graph URLs are absolute:

```js
export default defineConfig({
  site: "https://your-domain.com",
  // ...
});
```
