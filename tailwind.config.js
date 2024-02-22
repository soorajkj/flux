/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      "family-outfit": "var(--font-family-outfit)",
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
