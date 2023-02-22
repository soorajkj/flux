import { LayoutProps } from '@/types/layout';
import { inter } from '@/conf/fonts';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function RootLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
