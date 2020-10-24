require('dotenv').config()
import sitemapRoutes from './plugins/sitemap'

const isServerlessEnvironment = !!process.env.NOW_REGION

const descripcion = "Melanoma en Español es una iniciativa y plataforma en construcción, la cual busca ayudar a todas las personas que son y siguen siendo diagnosticadas con melanoma todos los días; así como para aquellos que buscan prevenir la enfermedad."

export default {
  env: {
    API_HOST: process.env.API_HOST || 'https://localhost:3001',
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: (chunk) => {
      return chunk ? `${chunk} - Melanoma en Español` : 'Melanoma en Español'
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: descripcion
      },
      {
        hid: "og:title",
        property: "og:title",
        template: (chunk) => {
          return chunk ? `Melanoma en Español - ${chunk}` : "Melanoma en Español"
        }
      },
      {
        hid: "og:description",
        property: "og:description",
        content: descripcion
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/images/og-image.png"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/fontawesome/css/all.min.css"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/dotenv",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    }
  },

  prismic: {
    endpoint: 'https://melanoma-espanol.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
    apiOptions: {
      accessToken: process.env.PRISM_ACCESS_TOKEN
    }
  },

  sitemap: {
    defaults: {
      changefreq: 'monthly',
    },
    hostname: 'https://www.melanoma-espanol.org',
    routes: sitemapRoutes,
  },

  robots: () => {
    return {
      UserAgent: '*',
      Disallow: process.env.MODE === 'prod' ? '' : '/'
    }
  },

    // Netlify reads a 404.html, Nuxt will load as an SPA
    generate: {
      fallback: '404.html'
    }
};
