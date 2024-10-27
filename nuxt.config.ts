import { config } from './server/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: config.PORT
  },
  ssr: false,
  imports: {
    // autoImport: false
  },
  compatibilityDate: '2024-04-03',
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/icon',
    '@nuxt/fonts'
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  },
  icon: {
    collections: [],
    provider: 'server',
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/images/icons'
      }
    ]
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google'
      }
    ]
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  devtools: { enabled: true }
})
