import * as React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import SessionProvider from '@/components/session-provider';
import Auth from '@/components/auth';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? <Auth /> : children}
        </SessionProvider>
      </body>
    </html>
  );
}
