import { inter } from "src/lib/fonts";
import { LayoutProps } from "@/types/layout";
import { NextAuthProvider } from "@/components/provider";
import "@/styles/tailwind.css";

export default function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="flex h-full w-full flex-col">{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
