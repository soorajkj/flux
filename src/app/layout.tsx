import { LayoutProps } from "~types/layout";
import * as fonts from "~lib/fonts";
import { cx } from "~lib/utils";
import ThemeProvider from "~components/theme-provider";
import "~styles/index.css";

export default function Layout(props: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={cx(`
      ${fonts.shantellSans.variable}
      ${fonts.caprasimo.variable}
      scroll-smooth
      `)}
    >
      <body className="h-full min-h-screen bg-zinc-50 font-family-shantell-sans text-sm font-normal leading-normal text-zinc-700 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange={true}
          enableSystem={true}
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
