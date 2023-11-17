export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'studyCode',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // (呈现页面之前)Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/test.js',
    '~/plugins/element.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  // axios 自己定义的  可以配置axios相关的操作
  axios:{
    proxy:true,//是否可以跨域
    retry:{retries:3},//重发
    // baseUrl:'' // 基本请求头
  }, 
  // proxy 自己定义的  可以配置跨域相关设置
  proxy:{

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    // middleware:'test'
  }
}
