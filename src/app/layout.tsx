import * as React from "react";
import { Metadata } from "next";
import SessionProvider from "@/components/session-provider";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggler from "@/components/theme-toggler";
import "@/app/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-white font-family-inter text-base font-normal leading-normal text-zinc-600 antialiased dark:bg-zinc-900 dark:text-zinc-400">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            {children}
            <ThemeToggler />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
