// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-content-twoslash',
    '@nuxt/content',
  ],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-12-03',
  content: {
    highlight: {
      theme: {
        light: 'material-theme-lighter',
        default: 'material-theme-lighter',
        dark: 'material-theme-palenight'
      },
      preload: ['json', 'js', 'ts', 'tsx', 'jsx', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
  },
  nitro: {
    preset: 'github-pages'
  }
})