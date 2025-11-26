// https://nuxt.com/docs/api/configuration/nuxt-config\

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'Nuxt3 project',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `/favicon.svg`,
        },
        {
          rel: 'canonical',
          href: '',
        },
      ],
    },
  },

  css: [
    '@/assets/styles/tailwind.css',
    '@/assets/styles/main.css',
    '@/assets/fonts/ruberoid/stylesheet.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    'shadcn-nuxt',

    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],

    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },

  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uz', name: 'Uzbek', file: 'uz.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
    ],
  },
  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
      public: {
        apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      },
    },
  },

  gtag: {
    id: process.env.GOOGLE_TAG_ID,
  },

  compatibilityDate: '2025-04-05',
})
