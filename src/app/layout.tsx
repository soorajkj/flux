import { LayoutProps } from '@/types/layout';
import { inter } from '@/libs/fonts';
import '@/styles/tailwind.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter} style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  );
}
