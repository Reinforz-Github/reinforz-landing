import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://reinforz.ai',
  integrations: [tailwind(), react(), robotsTxt()],
});
