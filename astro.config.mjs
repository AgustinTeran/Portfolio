import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  vite: {
    build: {
      assetsInlineLimit: 0 // Para mejor manejo de assets en Vercel
    }
  }
});