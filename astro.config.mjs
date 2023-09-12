import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions';

// ======================Astro Plugins ============================
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';


export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    react(),
    tailwind({applyBaseStyles:true}),
      mdx()
  ],
  server: ({ command }) => ({ port: command === 'dev' ? 3000 : 3000 })
});
