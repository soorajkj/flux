/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": "var(--font-family-inter)",
    },
    colors: {
      "color-primary": "rgb(var(--color-primary) / <alpha-value>)",
      "color-primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
      "color-primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
      "color-primary-contrast":
        "rgb(var(--color-primary-contrast) / <alpha-value>)",
      "color-secondary": "rgb(var(--color-secondary) / <alpha-value>)",
      "color-secondary-light":
        "rgb(var(--color-secondary-light) / <alpha-value>)",
      "color-secondary-dark":
        "rgb(var(--color-secondary-dark) / <alpha-value>)",
      "color-divider": "rgb(var(--color-divider) / <alpha-value>)",
      "color-divider-light": "rgb(var(--color-divider-light) / <alpha-value>)",
      "color-divider-dark": "rgb(var(--color-divider-dark) / <alpha-value>)",
      "color-error": "rgb(var(--color-error) / <alpha-value>)",
      "color-tooltip": "rgb(var(--color-tooltip) / <alpha-value>)",
      "color-popover": "rgb(var(--color-popover) / <alpha-value>)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwindcss-animate"],
};
