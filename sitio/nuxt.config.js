require('dotenv').config()
import sitemapRoutes from './plugins/sitemap'

const isServerlessEnvironment = !!process.env.NOW_REGION

export default {
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
    title: process.env.npm_package_name || "",
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
        content: process.env.npm_package_description || ""
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
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/sitemap"
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
    hostname: 'https://www.melanoma-en-espanol.org',
    routes: sitemapRoutes,
  },

    // Netlify reads a 404.html, Nuxt will load as an SPA
    generate: {
      fallback: '404.html'
    }
};
