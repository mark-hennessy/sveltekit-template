const sveltePreprocess = require('svelte-preprocess');
const autoprefixer = require('autoprefixer');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
    sourceMap: !production,
    babel: require('./babel.config.cjs'),
    scss: {
      prependData: `@import 'src/styles/variables.scss';`,
    },
    postcss: {
      plugins: [autoprefixer()],
    },
    defaults: {
      style: 'scss',
    },
  }),
  compilerOptions: {
    // enable run-time checks when not in production
    dev: !production,
  },
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: '@sveltejs/adapter-node',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
