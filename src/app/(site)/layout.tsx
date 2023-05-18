import { LayoutProps } from "@/types/layout";
import ThemeProvider from "@/components/shared/theme-provider";
import FontsProvider from "@/components/shared/fonts-provider";
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
