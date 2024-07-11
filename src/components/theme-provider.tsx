"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { caprasimo, geistMono, geistSans, shantell } from "@/lib/fonts";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-geist-sans: ${geistSans.style.fontFamily};
          --font-shantell: ${shantell.style.fontFamily};
          --font-geist-mono: ${geistMono.style.fontFamily};
          --font-caprasimo: ${caprasimo.style.fontFamily};
        }
      `}</style>
      <NextThemeProvider disableTransitionOnChange {...rest}>
        {children}
      </NextThemeProvider>
    </React.Fragment>
  );
}
