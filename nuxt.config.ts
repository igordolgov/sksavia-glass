// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },

  typescript: {
    shim: false,
  },

  ssr: false,

  app: {
    baseURL: '/nuxt-github-pages/',
    buildAssetsDir: 'assets',
  },

  modules: ['@nuxtjs/tailwindcss', [
    '@pinia/nuxt',
    {
      autoImports: [
        ['defineStore', 'definePiniaStore']
      ]
    }
  ], '@nuxt/image', 'nuxt-swiper', '@nuxt/icon'],

  runtimeConfig: {
    public: {
      appUrl: 'http://localhost:3000',
      stripePk: 'pk_test_xxxxxxxxxxxxxxxxxxxxxx'
    }
  },

  image: {
    quality: 80,
  },

  experimental: { appManifest: false },

  compatibilityDate: '2025-01-09'
})