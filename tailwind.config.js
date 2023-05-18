/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": ["var(--font-inter)"],
      "family-oswald": ["var(--font-oswald)"],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-animate"),
  ],
};
