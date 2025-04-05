/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFa500' 
      },
      backgroundColor:{
        primary: '#FFa500' ,
        secondary:'#ECF0F1'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

