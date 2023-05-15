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
  }
})
