// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3044,
  },
  imports: {
    autoImport: false,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
