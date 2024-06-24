import { ReactNode } from "react";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggler from "@/components/theme-toggler";
import "@/app/app.scss";

export default function Layout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-white font-family-inter text-base font-normal leading-normal text-neutral-500 antialiased dark:bg-neutral-900 dark:text-neutral-400">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
          <ThemeToggler />
        </ThemeProvider>
      </body>
    </html>
  );
}
