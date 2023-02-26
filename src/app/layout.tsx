import { inter } from '@/lib/fonts';
import { LayoutProps } from '@/types/layout';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function AppLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
