'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Authentication() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn('google')}>Login</button>
      )}
    </div>
  );
}
