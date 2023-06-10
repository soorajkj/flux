import * as React from "react";
import ThemeProvider from "@/components/providers/theme";
import SupabaseProvider from "@/components/providers/supabase";
import { LayoutProps } from "@/types/layout";
import "@/app/index.css";

interface AppLayoutProps extends LayoutProps {}

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full text-sm font-normal leading-normal antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
