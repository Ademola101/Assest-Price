/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'crypto': "url('/img/photo.jpg')"
      // }
    },
    fontFamily: {
      'header':['Merriweather']
    },
    
  },
  plugins: [],
}
