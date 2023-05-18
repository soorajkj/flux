"use client";

import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["cyrillic"] });

export default function FontsProvider() {
  return (
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
        --font-oswald: ${oswald.style.fontFamily};
      }
    `}</style>
  );
}
