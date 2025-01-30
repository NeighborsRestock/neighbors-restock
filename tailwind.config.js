/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
      fontSize: {
        clamp: "clamp(1rem, 1.4vw, 3rem)",
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
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}