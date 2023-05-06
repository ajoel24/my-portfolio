import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import adapterMulti from '@macfja/svelte-multi-adapter';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/+page.svelte'
			}
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterMulti([
			adapterNode({ out: 'build-node', precompress: false }),
			adapterStatic({ pages: 'build-static', assets: 'build-static', precompress: false })
		])
	}
};

export default config;
