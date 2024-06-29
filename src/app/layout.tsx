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
      <body className="bg-neutral-50 font-family-inter text-sm font-normal leading-normal text-neutral-500 antialiased dark:bg-neutral-900 dark:text-neutral-500">
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
