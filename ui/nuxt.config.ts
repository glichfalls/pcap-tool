import legacy from '@vitejs/plugin-legacy';
import browserslist from 'browserslist'
import { resolveToEsbuildTarget } from 'esbuild-plugin-browserslist'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '~/assets/css/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:8000',
    }
  },
  vite: {
    build: {

    },
    plugins: [
      legacy({
        targets: ['ff <= 59'],
      }),
    ]
  },
  hooks: {
    'build:manifest': (manifest) => {
      // kinda hacky, vite polyfills are incorrectly being loaded last so we have to move them to appear first in the object.
      // we can't replace `manifest` entirely, cause then we're only mutating a local variable, not the actual manifest
      // which is why we have to mutate the reference.
      // since ES2015 object string property order is more or less guaranteed - the order is chronological
      const polyfillKey = 'vite/legacy-polyfills-legacy'
      const polyfillEntry = manifest[polyfillKey]
      if (!polyfillEntry) return

      const oldManifest = { ...manifest }
      delete oldManifest[polyfillKey]

      for (const key in manifest) {
        delete manifest[key]
      }

      manifest[polyfillKey] = polyfillEntry
      for (const key in oldManifest) {
        manifest[key] = oldManifest[key]
      }
    }
  }
})

function getBuildTarget(browsers: any) {
  return resolveToEsbuildTarget(browserslist(browsers), {
    printUnknownTargets: false
  })
}