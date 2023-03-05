import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import { LayoutProps } from '@/types/layout';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: '',
  description: '',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next', 'React', 'Typescript'],
  creator: '',
  publisher: '',
  colorScheme: 'dark',
};

export default async function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
