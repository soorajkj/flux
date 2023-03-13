import { LayoutProps } from '@/types/layout';
import ThemeProvider from '@/components/ThemeProvider';
import Fonts from '@/components/Fonts';
import '@/styles/app.css';

export default async function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--family-inter)' }}>
        <Fonts />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
