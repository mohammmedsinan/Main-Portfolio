import { defineConfig } from "astro/config";

// ======================Astro Plugins ============================
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';


export default defineConfig({
   vite: {
    ssr: {
      external: ['svgo']
    }
  },
  experimental: {
    viewTransitions: true
   },
  integrations: [
    //React Integration
    react(),
    //TailWind Integration
    tailwind({applyBaseStyles:true}),
    //Image Integration
    image(),
    //Mdx Integration
    mdx()
  ],
});
