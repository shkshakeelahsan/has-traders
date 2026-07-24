// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Absolute canonical and Open Graph URLs are built from this.
  // Change it if the site is served from a different origin.
  site: "https://www.hastraders.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
