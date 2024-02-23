/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      "family-inter": "var(--font-family-inter)",
      "family-shantell-sans": "var(--font-family-shantell-sans)",
      "family-caprasimo": "var(--font-family-caprasimo)",
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
    purgeLayersByDefault: true,
  },
  plugins: [require("tailwindcss-animate")],
};
