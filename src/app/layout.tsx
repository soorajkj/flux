import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import ThemeProvider from "~components/ThemeProvider";
import SupabaseProvider from "~components/SupabaseProvider";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import { classnames } from "~lib/utlis";
import "~app/index.css";

export interface ExtendedLayoutProps
  extends LayoutProps,
    VariantProps<typeof LayoutStyles> {
  className?: string | string[];
}

export default function Layout(props: ExtendedLayoutProps) {
  const { children, className } = props;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={classnames(LayoutStyles({ className }))}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

const LayoutStyles = cva([
  "h-full",
  "min-h-screen",
  "w-full",
  "bg-color-base-000",
  "font-family-inter",
  "text-sm",
  "font-normal",
  "leading-normal",
  "text-color-base-500",
  "antialiased",
]);
