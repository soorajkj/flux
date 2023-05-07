/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: require('windicss/colors'),
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-animate'),
  ],
};
