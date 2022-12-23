/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
