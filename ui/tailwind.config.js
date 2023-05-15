const formKitTailwind = require('@formkit/themes/tailwindcss');
const flowbiteTailwind = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './formkit.config.js',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    formKitTailwind,
    flowbiteTailwind,
  ],
}

