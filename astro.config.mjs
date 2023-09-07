import { defineConfig } from "astro/config";

// ======================Astro Plugins ============================
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
// import image from '@astrojs/image';


export default defineConfig({
  // experimental: {
  //   viewTransitions: true
  //  },
  integrations: [
    react(),
    tailwind({applyBaseStyles:true}),
    // image(),
    mdx()
  ],
  server: ({ command }) => ({ port: command === 'dev' ? 3000 : 3000 })
});
