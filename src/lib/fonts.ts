import { Caprasimo, Outfit, Shantell_Sans } from "next/font/google";

export const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-outfit",
  display: "swap",
  preload: true,
});

export const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-family-shantell-sans",
  display: "swap",
  preload: true,
});

export const caprasimo = Caprasimo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-caprasimo",
  display: "swap",
  preload: true,
});
