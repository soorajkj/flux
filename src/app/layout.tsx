import { inter } from '@/libs/fonts';
import { LayoutProps } from '@/types/layout';
import '@/app/styles.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body className="__next-body">
        <div id="__next-root">{children}</div>
      </body>
    </html>
  );
}
