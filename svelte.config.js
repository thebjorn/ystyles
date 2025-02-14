import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';
import { getContrastColor } from './src/lib/utils/color-contrast.js';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    extensions: ['.svelte', '.md', '.svx', ...mdsvexConfig.extensions],

    kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

    preprocess: [
        sveltePreprocess({
            scss: {
                prependData: `
                    @use "sass:color";
                    @use "sass:list";
                    @use "sass:map";
                    @use "sass:meta";
                    @use "sass:string";
                    @use './src/scss/abstracts/mixins' as *;
                    @use './src/scss/abstracts/functions' as *;

                    $enable-on-colors: true; // Control the generation

                    @function get-contrast-color($color) {
                        @debug $color;
                        @return meta.call(meta.get-function('getContrastColor', $module: 'js'), $color);
                    }
                    `,
                renderSync: true,
            }
        }),
        mdsvex(mdsvexConfig)
    ]
};

export default config;
