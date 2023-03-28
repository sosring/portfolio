// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vueuse/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'], }]
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'SOSRING DEV | PORTFOLIO',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css", integrity: "sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==", crossorigin: "anonymous", referrerpolicy: "no-referrer" },
        { rel: "icon", type: "image/x-icon", href: "favicon.svg" }
      ]
    }
  },
  css: ['assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      SERVICE_ID: process.env.SERVICE_ID,
      PUBLIC_KEY: process.env.PUBLIC_KEY
    }
  },
  headlessui: {
    prefix: 'Headless'
  }
})
