/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      },
      boxShadow: {
        "box-shadow": "inset 0px -50px 36px rgba(0, 0, 0, 0.35)  "
      },
      backgroundColor:{
        bgForm:"#130C1C",
      },
      backgroundImage:{
        bg_chart:'linear-gradient(70deg,#4A55A2, #7895CB, #A0BFE0, #C5DFF8)'

      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
