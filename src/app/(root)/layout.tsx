import * as React from "react";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import ThemeProvider from "~components/providers/theme";
import "~app/index.css";

export default function Layout(_props: LayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-family-inter text-sm font-normal leading-normal">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {_props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
