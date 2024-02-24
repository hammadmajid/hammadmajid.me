import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
import partytown from '@astrojs/partytown';

// https://astro.build/config
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://hammadmajid.me',
  integrations: [tailwind(), sitemap(), svelte(), partytown(), prefetch()],
  output: "server",
  adapter: netlify()
});
