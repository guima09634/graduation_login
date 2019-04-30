module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'graduation_login',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'do as a login' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/axios',
  ],

  axios:{
    prefix: '/api/',
    proxy:true
  },

  plugins: [
    {src:'~plugins/element-ui', ssr: false},
    {src:'~/plugins/axios/axios'}],

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/index.css'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

