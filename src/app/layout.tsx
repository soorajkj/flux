import { ReactNode } from 'react';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function Layout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
