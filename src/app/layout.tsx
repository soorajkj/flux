import { LayoutProps } from '@/types/layout';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
