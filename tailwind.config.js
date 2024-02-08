/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "special-font" : 'Moirai One', 
        "special2": "Diphylleia"
      }, 
      colors: {
        "main-dark" : "#202020"
      }, 
      keyframes: {
        scared: {
          "0%, 100%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.04)"}
        }
      }, 
      animation: {
        scared: "scared 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

