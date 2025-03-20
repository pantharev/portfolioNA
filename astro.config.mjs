import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes
      theme: 'github-light',
      // Add custom languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
    remarkPlugins: [],
    rehypePlugins: [],
  },
});