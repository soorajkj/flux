import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { preset } from "untitledui-tw-preset";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      "family-sans": ["var(--font-geist-sans)"],
      "family-mono": ["var(--font-geist-mono)"],
      "family-casprasimo": ["var(--font-caprasimo)"],
      "family-shantell": ["var(--font-shantell)"],
    },
  },
  presets: [preset],
  plugins: [animate],
};

export default config;
