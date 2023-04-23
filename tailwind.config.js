/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'family-inter': 'var(--font-inter)',
      },
      colors: {
        'color-primary': 'var(--color-primary)',
        'color-primary-light': 'var(--color-primary-light)',
        'color-secondary': 'var(--color-secondary)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-animate'),
  ],
};
