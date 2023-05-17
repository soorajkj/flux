import { inter } from "@/lib/fonts";
import { LayoutProps } from "@/types/layout";
import "@/styles/tailwind.css";

export default function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex h-full w-full flex-col">{children}</div>
      </body>
    </html>
  );
}
