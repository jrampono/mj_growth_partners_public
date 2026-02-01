import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0D8B5A',
          'teal-dark': '#0A784A',
          navy: '#154C49',
          green: '#61CE70',
          blue: '#6EC1E4',
          black: '#191919',
          grey: '#54595F',
          'grey-light': '#EBEBEB',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
