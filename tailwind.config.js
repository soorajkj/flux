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
      "color-transparent": "transparent",
      "color-inherit": "inherit",
      "color-primary": "rgb(var(--clr-primary) / <alpha-value>)",
      "color-primary-light": "rgb(var(--clr-primary-light) / <alpha-value>)",
      "color-primary-dark": "rgb(var(--clr-primary-dark) / <alpha-value>)",
      "color-primary-contrast":
        "rgb(var(--clr-primary-contrast) / <alpha-value>)",
      "color-secondary": "rgb(var(--clr-secondary) / <alpha-value>)",
      "color-secondary-light":
        "rgb(var(--clr-secondary-light) / <alpha-value>)",
      "color-secondary-dark": "rgb(var(--clr-secondary-dark) / <alpha-value>)",
      "color-divider": "rgb(var(--clr-divider) / <alpha-value>)",
      "color-divider-light": "rgb(var(--clr-divider-light) / <alpha-value>)",
      "color-divider-dark": "rgb(var(--clr-divider-dark) / <alpha-value>)",
      "color-error": "rgb(var(--clr-error) / <alpha-value>)",
      "color-tooltip": "rgb(var(--clr-tooltip) / <alpha-value>)",
      "color-popover": "rgb(var(--clr-popover) / <alpha-value>)",
      "color-accent": "rgb(var(--clr-accent) / <alpha-value>)",
      "color-accent-light": "rgb(var(--clr-accent-light) / <alpha-value>)",
      "color-accent-dark": "rgb(var(--clr-accent-dark) / <alpha-value>)",
      "color-accent-contrast":
        "rgb(var(--clr-accent-contrast) / <alpha-value>)",
      "color-destruct": "rgb(var(--clr-destruct) / <alpha-value>)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwindcss-animate"],
};
