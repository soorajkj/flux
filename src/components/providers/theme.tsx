"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <NextThemesProvider {...rest}>{children}</NextThemesProvider>
    </React.Fragment>
  );
}
