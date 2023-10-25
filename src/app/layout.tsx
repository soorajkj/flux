import * as React from "react";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import ThemeProvider from "~components/providers/theme";
import ThemeSwitch from "~components/theme-switch";
import "~styles/index.css";

export default function Layout(_props: LayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="h-full min-h-screen bg-white font-family-inter text-sm font-normal leading-normal text-slate-600 antialiased dark:bg-neutral-900 dark:text-neutral-400">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {_props.children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
