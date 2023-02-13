import * as React from 'react';
import { getServerSession } from 'next-auth';
import { LayoutProps } from '@/types/layout';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ThemeProvider } from '@/components/theme-provider';
import SessionProvider from '@/components/session-provider';
import Authentication from '@/components/authentication';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function Layout(props: LayoutProps) {
  const { children } = props;
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <SessionProvider session={session}>
            {children}
            <Authentication />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
