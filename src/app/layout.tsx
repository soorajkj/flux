import * as React from 'react';
import ThemeProvider from '@/components/theme-provider';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
