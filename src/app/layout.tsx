import { LayoutProps } from '@/types/layout';
import { Inter } from '@next/font/google';
import '@/styles/tailwind.css';
import '@/styles/app.css';

const inter = Inter({
  variable: '--family-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default async function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
