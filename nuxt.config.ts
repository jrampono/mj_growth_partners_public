const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [400, 500, 600, 700],
    },
    display: 'swap',
  },

  app: {
    baseURL: isGhPages ? '/mj_growth_partners_public/' : '/',
    head: {
      title: 'MJ Growth Partner — Structured Growth for Ambitious Businesses',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'MJ Growth Partner combines proven business strategy with practical AI enablement to help owner-operated businesses break through the ceiling and scale.' },
        { property: 'og:title', content: 'MJ Growth Partner — Structured Growth for Ambitious Businesses' },
        { property: 'og:description', content: 'Stop being the bottleneck. Build the system that runs your business.' },
        { property: 'og:type', content: 'website' },
      ],
      htmlAttrs: { lang: 'en' },
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MJ Growth Partner',
            description: 'Structured growth strategy and practical AI enablement for owner-operated businesses between $1M and $20M.',
            url: 'https://mjgrowthpartner.com',
            founder: {
              '@type': 'Person',
              name: 'Marlon Juenemann',
            },
            areaServed: 'AU',
            serviceType: ['Business Consulting', 'AI Enablement', 'Growth Strategy'],
          }),
        },
      ],
    },
  },
})
