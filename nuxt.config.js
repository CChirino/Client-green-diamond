require('dotenv').config()

export default {
    head: {
        titleTemplate: 'Green Diamond - Shop for Landscape',
        title: 'Green Diamond',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Green Diamond - Shop for Landscape'
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext'
            }
        ]
    },

    css: [
        'swiper/dist/css/swiper.css',
        '~/static/fonts/Linearicons/Font/demo-files/demo.css',
        '~/static/fonts/font-awesome/css/font-awesome.css',
        '~/static/css/bootstrap.min.css',
        '~/assets/scss/style.scss'
    ],

    plugins: [
        { src: '~plugins/vueliate.js', ssr: false },
        { src: '~/plugins/swiper-plugin.js', ssr: false },
        { src: '~/plugins/vue-notification.js', ssr: false },
        { src: '~/plugins/axios.js', ssr: false },
        { src: '~/plugins/lazyLoad.js', ssr: false }
    ],

    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],

    styleResources: {
        scss: './assets/scss/env.scss'
    },

    modules: ['@nuxtjs/dotenv','@nuxtjs/axios', 'nuxt-i18n', '@nuxtjs/auth-next'],

    axios: {},
    i18n: {
        locales: [
            { code: 'en', file: 'en.json' },
            { code: 'fr', file: 'fr.json' }
        ],
        lazy: true,
        defaultLocale: 'en',
        langDir: 'lang/locales/'
    },

    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'active',
    },

    server: {
        port: 4002,
        host: 'localhost'
    },
    auth: {
        strategies: {
          laravelSanctum: {
            provider: "laravel/sanctum",
            url: "http://127.0.0.1:8000/api",
            endpoints: {
              login: {
                url: "/login"
              },
              logout: {
                url: "/logout"
              },
              user: {
                url: "/user"
              }
            },
            user: {
              property: false
            }
          }
        },
    
        redirect: {
          login: "/account/login",
          logout: "/",
          home: "/"
        }
      },
};
