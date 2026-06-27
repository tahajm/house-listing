// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_BASE_URL = 'https://partnerapi.funda.nl/feeds/Aanbod.svc/json'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image'],

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    baseURL: DEFAULT_BASE_URL,
    apiKey: '',
  },

  app: {
    head: {
      title: 'Funda House Listing',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'Browse house listings for sale on Funda.' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
