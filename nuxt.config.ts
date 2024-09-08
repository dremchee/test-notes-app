import { persistedState } from "#imports";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3044,
  },
  imports: {
    autoImport: false,
  },
  compatibilityDate: "2024-04-03",
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  icon: {
    provider: "server",
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/images/icons",
      },
    ],
  },
  fonts: {
    families: [
      {
        name: "Nunito",
        provider: "google",
      },
    ],
  },
  devtools: { enabled: true },
});
