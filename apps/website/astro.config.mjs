import { defineConfig } from 'astro/config';
import angular from '@analogjs/astro-angular';

// https://astro.build/config
export default defineConfig({
    "outDir": "../../dist/website",
    integrations: [angular({
        vite: {
            tsconfig: 'apps/website/tsconfig.app.json'
          }
    })]
});