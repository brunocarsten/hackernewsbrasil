// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {compatibilityVersion: 4},
  devtools: {enabled: true},
  modules: ["@nuxt/ui"],

  eslint: {
      config: {
          stylistic: {
              coma: false
          }
      }
  },

  compatibilityDate: "2024-08-19"
})