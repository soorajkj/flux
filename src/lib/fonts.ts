import { Caprasimo, Montserrat, Shantell_Sans } from "next/font/google";

export const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-family-inter",
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
