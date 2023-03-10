/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [ 
	 "./components/**/*.{js,vue,ts}", 
	 "./layouts/**/*.vue",
	 "./pages/**/*.vue",
	  "./plugins/**/*.{js,ts}", 
	  "./nuxt.config.{js,ts}", 
  ],
  theme: {
    colors: {
      primary: '#F0F0F0',
      secoundary: '#FC4350',
      accent: '#444DF8',
      light: '#44435D'
    },
    extend: {
      fontFamily: {
        montserrat: ['montserrat'],
        poppins: ['poppins'],
        raleway: ['raleway']
      },
    },
  },
  plugins: [],
}
