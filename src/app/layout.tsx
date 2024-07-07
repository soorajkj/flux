import * as React from "react";
import { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggler from "@/components/theme-toggler";
import "@/app/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-zinc-50 font-family-inter text-sm font-normal leading-normal text-zinc-500 antialiased dark:bg-zinc-950 dark:text-zinc-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ThemeToggler />
        </ThemeProvider>
      </body>
    </html>
  );
}
