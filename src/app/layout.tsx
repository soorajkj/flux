import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import ThemeProvider from "~components/ThemeProvider";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import { classnames } from "~lib/utlis";
import "./index.css";

type LayoutWithVariant = LayoutProps & VariantProps<typeof LayoutStyles>;
interface ExtendedLayoutProps extends LayoutWithVariant {}

export default function Layout(_props: ExtendedLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={classnames(LayoutStyles())}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {_props.children}
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
