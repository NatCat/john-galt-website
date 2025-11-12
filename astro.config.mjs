// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// Only use base path in production (for GitHub Pages)
// In development, use root path for cleaner URLs
const isProduction = process.env.NODE_ENV === 'production' || process.env.CI === 'true';

export default defineConfig({
  site: 'https://NatCat.github.io/john-galt-website',
  base: isProduction ? '/john-galt-website/' : '/',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'sr', 'hy', 'fr'],
    routing: {
      prefixDefaultLocale: false, // English at root (/)
    },
  },

  vite: {
    resolve: {
      alias: {
        'netlify-identity-widget': path.resolve(
          'node_modules/netlify-identity-widget/build/netlify-identity-widget.js'
        ),
      },
    },
  },
});