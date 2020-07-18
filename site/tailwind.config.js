/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      'sans': '"Lato", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': '"DM Serif Display", Georgia, Cambria, "Times New Roman", Times, serif;'
    },
    extend: {
      colors: {
        "white": {
          "default": "#fff",
          100: "#fffffa"
        },
        "skin-dark": {
          100: "#d17961",
          200: "#bd654d",
          300: "#a95139",
          400: "#670e00"
        },
        "skin-brunette": {
          100: "#ffe3c6",
          200: "#fcbc91",
          300: "#e8a87d",
          400: "#ed9f57",
          500: "#D98B43",
          600: "#c5772f"
        },
        "skin-fair": {
          100: "#ffcfb2",
          200: "#f3b398",
          300: "#de9376",
          400: "#ca7f62",
          500: "#b66b4e"
        },
        "skin-pale": {
          100: "#f8efe6",
          200: "#feefe9"
        }
      },
      height: {
        'slider1': '20rem',
        'slider2': '22.4rem',
        'stats1': '260px',
        'stats2': '324px',
        'blog': '782px'
      }
    },
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.gray.800'),
          h1: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.gray.800')
          },
          h2: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.gray.800')
          },
          h3: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.skin-dark.300')
          },
          h4: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.skin-dark.300')
          },
          h5: {
            fontFamily: theme('fontFamily.serif'),
            color: theme('colors.skin-dark.300')
          },
          a: {
            color: theme('colors.skin-dark.200'),
            '&:hover': {
              color: theme('colors.skin-dark.400'),
            },
          },
          ul: {
            width: "85%"
          },
          ol: {
            width: "85%"
          }
        }
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
