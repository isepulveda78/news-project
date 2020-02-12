const pkg = require('./package')

module.exports = {
  mode: 'spa',
  router: {
    middleware: 'check-auth'
  },
  /*
  ** Headers of the page
  */
 head: {
  title: pkg.name,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: pkg.description }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href:
        "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
    }
  ]
},

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#9ccc65', height: '10px' },

  /*
  ** Global CSS
  */
  css: [
    {src: 'vue-material/dist/vue-material.min.css', lang: 'css'},
    {src: '~/assets/theme.scss', lang: 'scss'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vue-material'},
    { src: '~/plugins/axios' },
    { src: '~/plugins/firestore'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCeb97VeWrNQHBKjZnr7t0XIfE2TskPHM8",
      pathRewrite: { "^/register/": "" }
    },
    "/login/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCeb97VeWrNQHBKjZnr7t0XIfE2TskPHM8",
      pathRewrite: { "^/login/": "" }
    }
  },
  env: {
    NEWS_API_KEY: "5579f616ce894c99ac1d13a9266b95aa"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
