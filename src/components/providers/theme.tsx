"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["cyrillic"] });

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <NextThemesProvider {...rest}>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-oswald: ${oswald.style.fontFamily};
        }
      `}</style>
      {children}
    </NextThemesProvider>
  );
}
