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
      <body className="h-full min-h-screen w-full font-family-inter text-sm font-normal leading-normal antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
