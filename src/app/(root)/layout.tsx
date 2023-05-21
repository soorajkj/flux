import * as React from "react";
import { LayoutProps } from "@/types/layout";
import ThemeProvider from "@/components/providers/theme";
import "@/app/(root)/index.css";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full font-family-inter text-sm font-normal leading-normal antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
