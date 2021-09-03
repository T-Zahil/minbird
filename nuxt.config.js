export default {
  ssr: false,
  components: true,
  telemetry: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'minbird',
    script: [
      {
        async: 'async',
        src: 'https://cdn.splitbee.io/sb.js',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },

  env: {
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_SECRET_KEY: process.env.TWITTER_SECRET_KEY,
    TWITTER_BEARER: process.env.TWITTER_BEARER,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-infinite-loading.js'],

  colorMode: {
    preference: 'sepia',
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    headers: {
      'Content-Type': 'application/json',
      'content-type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
