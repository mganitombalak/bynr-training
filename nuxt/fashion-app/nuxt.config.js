// import package from './package';
export default {
  devtools:true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Morhipo | Moda Alisveris Sitesi', //package.name
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" },
    ]
  },
  // alias:{
  //     'imageDir':'<rootDir>/images'
  // },
  // loading:false,
  // dir:{
  //     pages:'benimsayfam',
  //     asset:'',
  //     layouts:'masterpages'
  // },
  env: {
    baseUrl: process.env.baseUrl || "https://api.morhipo.com",
    name: 'Production'
  },
  telemetry: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directives/menu-hover/index.js',
    '~/plugins/components/campaign-item/index.js'
  ],
  // router: {
  //   // base: '/',
  //   // mode:'hash',
  //   // linkActiveClass:'active'
  //   // extendRoutes(routes, resolve) {
  //   //   routes.push({
  //   //     path: '/users/:id',
  //   //     components: {
  //   //       default: resolve(__dirname, 'pages/users'), // or routes[index].component
  //   //       modal: resolve(__dirname, 'components/modal.vue')
  //   //     },
  //   //     chunkNames: {
  //   //       modal: 'components/modal'
  //   //     }
  //   //   })
  //   // }
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/http'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
