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
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-family-inter: ${inter.style.fontFamily};
          --font-family-oswald: ${oswald.style.fontFamily};
        }
      `}</style>
      <NextThemesProvider {...rest}>{children}</NextThemesProvider>
    </React.Fragment>
  );
}
