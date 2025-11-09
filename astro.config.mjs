// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// replace <user> and <repo> with your GitHub info
export default defineConfig({
  site: 'https://NatCat.github.io/john-galt-website',    // omit base if this is a user/organization site
  base: '/john-galt-website/',

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