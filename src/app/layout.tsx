import * as React from "react";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import ThemeProvider from "~components/providers/theme";
import { Separator } from "~components/core/separator";
import Header from "~components/header";
import Footer from "~components/footer";
import "./index.css";

export default function Layout(_props: LayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-family-inter text-sm font-normal leading-normal">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen w-full flex-col">
            <Header />
            <Separator />
            <main className="flex-1 overflow-y-auto">{_props.children}</main>
            <Separator />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
