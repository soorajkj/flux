import { Inter, Oswald } from "next/font/google";

const interFontFamily = Inter({ subsets: ["latin"] });
const oswaldFontFamily = Oswald({ subsets: ["cyrillic"] });

const inter = interFontFamily.style.fontFamily;
const oswald = oswaldFontFamily.style.fontFamily;

export { inter, oswald };
