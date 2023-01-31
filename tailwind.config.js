/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-transparent': 'transparent',
        'color-current-color': 'currentColor',
        'color-accent': 'var(--color-accent)',
        'color-accent-light': 'var(--color-accent-light)',
        'color-accent-dark': 'var(--color-accent-dark)',
        'color-accent-contrast': 'var(--color-accent-contrast)',
        'color-primary': 'var(--color-primary)',
        'color-primary-light': 'var(--color-primary-light)',
        'color-primary-dark': 'var(--color-primary-dark)',
        'color-primary-contrast': 'var(--color-primary-contrast)',
        'color-secondary': 'var(--color-secondary)',
        'color-secondary-light': 'var(--color-secondary-light)',
        'color-secondary-dark': 'var(--color-secondary-dark)',
        'color-tertiary': 'var(--color-tertiary)',
        'color-tertiary-light': 'var(--color-tertiary-light)',
        'color-tertiary-dark': 'var(--color-tertiary-dark)',
      },
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss', require('tailwindcss-animate')),
  ],
};
