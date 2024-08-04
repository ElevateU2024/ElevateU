/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '0px',    // No minimum width
      'sm': '640px',  // Minimum width: 640px
      'md': '768px',  // Minimum width: 768px
      'lg': '1024px', // Minimum width: 1024px
      'xl': '1280px', // Minimum width: 1280px
      '2xl': '1536px' // Minimum width: 1536px
    },
    extend: {
      fontFamily:{
        mateSc:["Mate SC, serif"],
        mate:["Mate, serif"],
        Protest:['Protest Revolution ,sans-serif'],
        Roboto:['Roboto Mono,monospace'],
        Playwrite:["Playwrite NG Modern ,cursive"],
        Playwrite2:["Playwrite FR Modern ,cursive"],
        Gupter :["Gupter , serif"],
        Merriweather:["Merriweather, serif"]
      },
      rotate: {
        '135': '135deg',
      },
      backgroundImage: {
        'home': "url('../public/HomeImg.png')",
        'mobile': "url('../public/MobileHomeImg.png')",
        'Lhome': "url('../public/HomeImgL.png')",
        'Lmobile': "url('../public/MobileHomeImgL.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}