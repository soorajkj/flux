/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": "var(--font-family-inter)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
};
