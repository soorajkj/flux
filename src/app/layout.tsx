import type { Metadata } from 'next';
import 'reactflow/dist/style.css';
import ThemeProvider from '@/components/ThemeProvider';
import Fonts from '@/components/Fonts';
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
      <body>
        <Fonts />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
