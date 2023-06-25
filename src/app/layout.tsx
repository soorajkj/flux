import * as React from "react";
import ThemeProvider from "~components/providers/theme";
import SupabaseProvider from "~components/providers/supabase";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import "~app/index.css";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-color-neutral-025 font-family-inter text-base font-normal leading-normal text-color-neutral-600 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
