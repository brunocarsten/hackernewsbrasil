// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/eslint'],

  eslint: {
    config: {
      stylistic: {
        // semi: false,
        quotes: 'single',
        braceStyle: 'allman',
      },
    },
  },

  // eslint-disable-next-line @stylistic/comma-dangle
  compatibilityDate: '2024-08-19',
})
