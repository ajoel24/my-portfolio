import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		coverage: {
			reporter: ['text', 'json', 'html', 'lcov']
		}
	},
	ssr: {
		noExternal: ['@popperjs/core']
	}
});
