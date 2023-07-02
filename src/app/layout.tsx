import * as React from "react";
import ThemeProvider from "~components/providers/theme-provider";
// import { Pannel } from "~components/core/pannel";
import { Separator } from "~components/core/separator";
import Header from "~components/header";
import Footer from "~components/footer";
import Routesbar from "~components/routesbar";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import "~app/index.css";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-neutral-900 font-family-inter text-sm font-normal leading-normal text-neutral-500 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-full min-h-screen w-full flex-col">
            <Header />
            <Separator orientation="horizontal" />
            <div className="flex h-full w-full flex-1 flex-row">
              <Routesbar />
              <Separator orientation="vertical" className="h-auto" />
              <main className="flex-1">{children}</main>
            </div>
            <Separator orientation="horizontal" />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
