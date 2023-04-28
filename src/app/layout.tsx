import { LayoutProps } from '@/types/layout';
import '@/styles/tailwind.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
