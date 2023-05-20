"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { inter, oswald } from "@/lib/fonts";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-family-inter: ${inter};
          --font-family-oswald: ${oswald};
        }
      `}</style>
      <NextThemesProvider {...rest}>{children}</NextThemesProvider>
    </React.Fragment>
  );
}
