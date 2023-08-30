import { defineConfig } from "astro/config";

// ======================Astro Plugins ============================
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';


export default defineConfig({
  experimental: {
    viewTransitions: true
   },
  integrations: [
    //React Integration
    react(),
    //TailWind Integration
    tailwind({applyBaseStyles:false}),
    //Image Integration
    image(),
    //Mdx Integration
    mdx()
  ],
});
