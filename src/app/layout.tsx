import * as React from 'react';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
