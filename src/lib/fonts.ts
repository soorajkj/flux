import { Caprasimo, Shantell_Sans } from "next/font/google";

export const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-family-shantell-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const caprasimo = Caprasimo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-caprasimo",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});
