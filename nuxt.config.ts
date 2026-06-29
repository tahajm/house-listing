// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    baseURL: '',
    apiKey: '',
  },

  app: {
    head: {
      title: 'House Listings',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'Browse house listings for sale' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
