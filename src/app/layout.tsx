import { Inter } from 'next/font/google';
import { LayoutProps } from '@/types';
import Providers from '@/components/providers';
import '@/app/styles.css';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
