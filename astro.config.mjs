import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel/serverless';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  site: 'https://hammadmajid.me',
  integrations: [tailwind(), sitemap(), svelte(), partytown(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      'blogPost': 'storyblok/BlogPost',
    },
  })],
  prefetch: true,
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
