// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages *user site* (repo: Felix471/felix471.github.io),
// so it is served from the domain root and no `base` is needed.
// If you later attach a custom domain, change `site` to that domain.
export default defineConfig({
  site: 'https://felix471.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
