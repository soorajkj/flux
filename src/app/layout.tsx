import { LayoutProps } from '@/types/layout';
import { interClass } from '@/lib/fonts';
import '@/styles/tailwind.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={interClass}>
      <body>{children}</body>
    </html>
  );
}
