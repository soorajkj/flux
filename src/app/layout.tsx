import * as React from "react";
import ThemeProvider from "~components/ThemeProvider";
import SupabaseProvider from "~components/SupabaseProvider";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import "~app/index.css";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-neutral-900 font-family-inter text-xs font-normal leading-normal text-neutral-500 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
