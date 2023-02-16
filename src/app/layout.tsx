import * as React from 'react';
import '@/styles/tailwind.css';
import '@/styles/app.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
