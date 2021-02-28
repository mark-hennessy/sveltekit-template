// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: '@sveltejs/snowpack-config',
  mount: {
    'src/components': '/_components',
    'src/utils': '/_utils',
  },
  alias: {
    $components: './src/components',
    $utils: './src/utils',
  },
};
