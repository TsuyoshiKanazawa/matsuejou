// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      /** 
      gtm: {
        id: 'GTM-'
      }*/
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: '国宝指定10周年記念 松江城攻略室',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { 'http-equiv': 'content-language', content: 'ja' },
        { hid: 'og:site_name', property: 'og:site_name', content: '国宝指定10周年記念 松江城攻略室' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://navi.kankou-matsue.jp/matsue-castle-kouryakushitsu/' },
        { hid: 'og:title', property: 'og:title', content: '国宝指定10周年記念 松江城攻略室' },
        { hid: 'og:image', property: 'og:image', content: '/img/OGP.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins" as mixins; @use "@/assets/scss/defines" as defines;',
        },
      },
    },
  },
  modules: [/*'@zadigetvoltaire/nuxt-gtm'*/],
})
