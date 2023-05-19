/* eslint-disable no-console */
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
          --font-family-inter: ${inter.style.fontFamily};
          --font-family-oswald: ${oswald.style.fontFamily};
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: var(--font-family-inter);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.375;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
      {children}
    </NextThemesProvider>
  );
}
