import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { setting } from "./settings.ts";

// https://astro.build/config
export default defineConfig({
 site: `${setting.site.siteLink}`,
 experimental: { assets: true, viewTransitions: true },
 compressHTML: true,
 integrations: [
  partytown(),
  tailwind({
   config: {
    applyBaseStyles: false,
   },
  }),
  robotsTxt({
   sitemap: [
    `${setting.site.siteLink}/sitemap-index.xml`,
    `${setting.site.siteLink}/sitemap-0.xml`,
   ],
  }),
  sitemap(),
  react(),
  mdx(),
 ],
});
