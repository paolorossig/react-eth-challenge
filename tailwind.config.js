/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#272D2D',
        brand: '#FA4520',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
