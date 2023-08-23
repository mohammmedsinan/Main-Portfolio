import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    //React Integration
    react(),
    //TailWind Integration
    tailwind({
        applyBaseStyles: true,
    }),
    //Image Integration
    image(),
    //Mdx Integration
    mdx()
  ],
});
