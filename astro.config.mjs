// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Manrope",
            cssVariable: "--font-manrope",
            fallbacks: ["Inter", "sans-serif"],
        }, {
            provider: fontProviders.google(),
            name: "Major Mono Display",
            cssVariable: "--font-major-mono",
            fallbacks: ["monospace"],
        }]
    },

  adapter: vercel()
});