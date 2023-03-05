import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export const metadata: Metadata = {
  title: '',
  description: '',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [],
  creator: '',
  publisher: '',
};

export default async function AppLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
