export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'O Único Travesseiro Anatômico do Mundo com 11 alturas',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'google-site-verification', content: 'P3lKEOiZzhx81ViwQtJnl1pxSUSkjBtEj3smgq72HYY' },
      { hid: 'description', name: 'description', content: 'Você já parou para pensar que o seu travesseiro pode ser o causador desses problemas? Um travesseiro desenvolvido por especialistas da coluna vertebral que se encaixa perfeitamente em qualquer biotipo.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap' },
      { rel: 'canonical', href: 'https://travesseiro.goodspine.com.br/' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/_global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vueSmoothScroll.js', mode: 'client' },
    { src: '~/plugins/vue-js-modal.js' },
    { src: '~/plugins/vue-mobile-detection.js' },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
