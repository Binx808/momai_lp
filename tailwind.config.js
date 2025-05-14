/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mom-ai-blue': '#A3BFFA',
        'mom-ai-beige': '#F5F5DC',
        'mom-ai-pink': '#FFC0CB', // A subtle pink, can be adjusted
        'mom-ai-dark-font': '#1A2526',
        'mom-ai-orange-button': '#F4A261',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
