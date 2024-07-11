import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import colors from "windicss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        white: colors.white,
        black: colors.black,
        neutral: colors.neutral,
      },
    },
    fontFamily: {
      "family-sans": ["var(--font-geist-sans)"],
      "family-mono": ["var(--font-geist-mono)"],
      "family-casprasimo": ["var(--font-caprasimo)"],
      "family-shantell": ["var(--font-shantell)"],
    },
  },
  plugins: [animate],
};

export default config;
