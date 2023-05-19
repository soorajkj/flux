import { LayoutProps } from "@/types/layout";
import ThemeProvider from "@/components/providers/theme";
import "@/styles/tailwind.css";

export default function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
