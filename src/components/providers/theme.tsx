"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-family-inter: ${inter.style.fontFamily};
        }
        :root.dark {
          --color-primary: 15 15 15;
          --color-primary-light: 23 23 23;
          --color-primary-dark: 24 24 24;
          --color-primary-contrast: 15 15 15;
          --color-secondary: 163 163 163;
          --color-secondary-light: 115 115 115;
          --color-secondary-dark: 245 245 245;
          --color-divider: 28 28 30;
          --color-divider-light: 24 24 24;
          --color-divider-dark: 50 50 50;
          --color-error: 28 25 23;
          --color-tooltip: 245 245 245;
          --color-popover: 15 15 15;
        }
      `}</style>
      <NextThemesProvider {...rest}>{children}</NextThemesProvider>
    </React.Fragment>
  );
}
