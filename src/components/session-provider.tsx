'use client';

import * as React from 'react';
import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

interface SessionProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

export default function SessionProvider(props: SessionProviderProps) {
  const { children, session } = props;

  return <Provider session={session}>{children}</Provider>;
}
