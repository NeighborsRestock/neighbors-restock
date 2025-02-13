/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'max': '900px'},
      // => @media (max-width: 900px) { ... }
      'mobile': {'max': '700px'},
      // => @media (max-width: 700px) { ... }
      'desktop': {'min': '701px'},
      // => @media (min-width: 700px) { ... }
    },
  	extend: {
      fontSize: {
        clamp: "clamp(1rem, 1.4vw, 3rem)",
        'clamp-1': "clamp(2rem, 5.5vw, 3.7rem)",
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "exo": ['Exo', 'sans-serif']
      },
  		colors: {},
      zIndex:{
        max: '9999',
      },
  	}
  },
  plugins: [require("tailwindcss-animate"), 
    function({addUtilities}){
      addUtilities({
        ".debug-r": {
            border: '2px solid red', // Custom red border
          },
        })
    }
  ],
}