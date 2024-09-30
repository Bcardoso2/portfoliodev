import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";
import vercelServerless from "@astrojs/vercel/serverless";




// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  // adapter: vercelServerless({
  //   webAnalytics: {
  //     enabled: true,
  //   },
  //   maxDuration: 10,
  //   imageService: true
  // }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});