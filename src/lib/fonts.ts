import { Caprasimo, Shantell_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

export const shantell = Shantell_Sans({
  variable: "--font-shantell",
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export const geistMono = GeistMono;

export const geistSans = GeistSans;
