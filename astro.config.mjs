import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://annoying-rambler.github.io',
	i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false
		},
    }
});
