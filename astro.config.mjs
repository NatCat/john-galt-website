// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'netlify-identity-widget': path.resolve('node_modules/netlify-identity-widget/build/netlify-identity-widget.js')
      }
    }
  }
});
