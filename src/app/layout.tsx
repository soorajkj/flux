import { Metadata } from "next";
import { LayoutProps } from "~types/layout";
import * as fonts from "~lib/fonts";
import { cx } from "~lib/utils";
import Toaster from "~components/core/toaster";
import ThemeProvider from "~components/theme-provider";
import "~styles/index.css";

export const metadata: Metadata = {
  title: "Tesseract",
  description: "Personalized and flexible writing / todo app",
  icons: { icon: "favicon.ico" },
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI"],
};

export default function Layout(props: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cx(`
      ${fonts.shantellSans.variable}
      ${fonts.caprasimo.variable}
      ${fonts.outfit.variable}
      scroll-smooth
      `)}
    >
      <body className="h-full min-h-screen bg-neutral-900 font-family-shantell-sans text-sm font-normal leading-normal text-neutral-500 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={true}
          enableSystem={true}
        >
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
