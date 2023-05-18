import { LayoutProps } from "@/types/layout";
import ThemeProvider from "@/components/site/theme-provider";
import FontsProvider from "@/components/site/fonts-provider";
import "@/styles/tailwind.css";

export default function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <FontsProvider />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
