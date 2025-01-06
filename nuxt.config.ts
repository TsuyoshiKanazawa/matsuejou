// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-W7RG6B8T'
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/matsue-castle-kouryakushitsu/',
    head: {
      title: '松江城攻略室 | 国宝指定10周年記念オリジナルブラウザゲーム',
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
        { hid: 'description', name: 'description', content: '島根県松江市にある国宝松江城天守が2025年7月8日「国宝指定10周年」を迎えることを記念し登場した高難易度オリジナルブラウザゲーム。松江城が誇る「防御性能の高さ」を全5ステージ＋シークレットステージで体験できるほか、松江城の見所も紹介！| 一般社団法人松江観光協会' },
        { hid: 'og:site_name', property: 'og:site_name', content: '松江城攻略室 | 国宝指定10周年記念オリジナルブラウザゲーム' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://navi.kankou-matsue.jp/matsue-castle-kouryakushitsu/' },
        { hid: 'og:title', property: 'og:title', content: '松江城攻略室 | 国宝指定10周年記念オリジナルブラウザゲーム' },
        { hid: 'og:description', property: 'og:description', content: '島根県松江市にある国宝松江城天守が2025年7月8日「国宝指定10周年」を迎えることを記念し登場した高難易度オリジナルブラウザゲーム。松江城が誇る「防御性能の高さ」を全5ステージ＋シークレットステージで体験できるほか、松江城の見所も紹介！| 一般社団法人松江観光協会' },
        { hid: 'og:image', property: 'og:image', content: '/img/OGP.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' },
        { hid: 'twitter:title', property: 'twitter:title', content: '松江城攻略室 | 国宝指定10周年記念オリジナルブラウザゲーム' },
        { hid: 'twitter:description', property: 'twitter:description', content: '島根県松江市にある国宝松江城天守が2025年7月8日「国宝指定10周年」を迎えることを記念し登場した高難易度オリジナルブラウザゲーム。松江城が誇る「防御性能の高さ」を全5ステージ＋シークレットステージで体験できるほか、松江城の見所も紹介！| 一般社団法人松江観光協会' },
        { hid: 'twitter:image', property: 'twitter:image', content: '/img/OGP.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  plugins: [],
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
  modules: ['@zadigetvoltaire/nuxt-gtm'],
})
