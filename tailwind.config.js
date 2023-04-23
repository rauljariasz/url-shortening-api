/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      ...colors,
      'primary': '#2acfcf',
      'secondary': '#3b3054',
      'hover': '#9be3e2',
      'error': '#f46262',
      'footer': '#232127',
      'shortenSection': '#9e9aa7',
      'bgMobileMenu': '#00000088',
      'grayViolet': '#544a6d'
    },
    extend: {
      backgroundImage: {
        'bgShortenMobile': "url('/src/assets/bg-shorten-mobile.svg')",
        'bgShortenDesktop': "url('/src/assets/bg-shorten-desktop.svg')",
      }
    },
  },
  plugins: [],
}

