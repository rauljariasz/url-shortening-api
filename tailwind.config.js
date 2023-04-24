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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'desktop': '1440px',
    },
    colors: {
      ...colors,
      'primary': '#2acfcf',
      'secondary': '#3b3054',
      'hover': '#9be3e2',
      'error': '#f46262',
      'darkViolet': '#232127',
      'shorterSection': '#eff1f7',
      'bgMobileMenu': '#00000088',
      'grayViolet': '#544a6d'
    },
    extend: {
      backgroundImage: {
        'bgShortenMobile': "url('/src/assets/bg-shorten-mobile.svg')",
        'bgShortenDesktop': "url('/src/assets/bg-shorten-desktop.svg')",
        'bgBoostMobile': "url('/src/assets/bg-boost-mobile.svg')",
        'bgBoostDesktop': "url('/src/assets/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}

