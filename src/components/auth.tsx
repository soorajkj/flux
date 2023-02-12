'use client';

import { signIn } from 'next-auth/react';

export default function Auth() {
  return (
    <div>
      <button onClick={() => signIn('google')}>Google</button>
      <button onClick={() => signIn('github')}>Github</button>
    </div>
  );
}
