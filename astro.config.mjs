import { defineConfig } from "astro/config";

// ======================Astro Plugins ============================
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';


export default defineConfig({
  // experimental: {
  //   viewTransitions: true
  //  },
  integrations: [
    react(),
    tailwind({applyBaseStyles:true}),
      mdx()
  ],
  server: ({ command }) => ({ port: command === 'dev' ? 3000 : 3000 })
});
