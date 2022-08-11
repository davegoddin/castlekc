/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      'purple-500': '#762b94',
      'purple-300': '#8945A4',
      'purple-100': '#e7d0f1'
      },
      fontFamily: {
        'accent': ['Bebas\\ Neue']
      }
    },
  },
  plugins: [],
}
