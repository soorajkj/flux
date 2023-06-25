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
      "color-black": "rgba(0, 0, 0, 1)",
      "color-white": "rgba(255, 255, 255, 1)",
      "color-neutral-900": "rgb(var(--color-neutral-900) / <alpha-value>)",
      "color-neutral-800": "rgb(var(--color-neutral-800) / <alpha-value>)",
      "color-neutral-700": "rgb(var(--color-neutral-700) / <alpha-value>)",
      "color-neutral-600": "rgb(var(--color-neutral-600) / <alpha-value>)",
      "color-neutral-500": "rgb(var(--color-neutral-500) / <alpha-value>)",
      "color-neutral-400": "rgb(var(--color-neutral-400) / <alpha-value>)",
      "color-neutral-300": "rgb(var(--color-neutral-300) / <alpha-value>)",
      "color-neutral-200": "rgb(var(--color-neutral-200) / <alpha-value>)",
      "color-neutral-100": "rgb(var(--color-neutral-100) / <alpha-value>)",
      "color-neutral-050": "rgb(var(--color-neutral-050) / <alpha-value>)",
      "color-neutral-025": "rgb(var(--color-neutral-025) / <alpha-value>)",
      "color-primary-900": "rgb(var(--color-primary-900) / <alpha-value>)",
      "color-primary-800": "rgb(var(--color-primary-800) / <alpha-value>)",
      "color-primary-700": "rgb(var(--color-primary-700) / <alpha-value>)",
      "color-primary-600": "rgb(var(--color-primary-600) / <alpha-value>)",
      "color-primary-500": "rgb(var(--color-primary-500) / <alpha-value>)",
      "color-primary-400": "rgb(var(--color-primary-400) / <alpha-value>)",
      "color-primary-300": "rgb(var(--color-primary-300) / <alpha-value>)",
      "color-primary-200": "rgb(var(--color-primary-200) / <alpha-value>)",
      "color-primary-100": "rgb(var(--color-primary-100) / <alpha-value>)",
      "color-primary-050": "rgb(var(--color-primary-050) / <alpha-value>)",
      "color-primary-025": "rgb(var(--color-primary-025) / <alpha-value>)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: ["prettier-plugin-tailwindcss", "tailwindcss-animate"],
};
