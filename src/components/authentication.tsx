'use client';

import { signIn } from 'next-auth/react';

export default function Authentication() {
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => signIn('google')}>Google</button>
      <button onClick={() => signIn('github')}>Github</button>
    </div>
  );
}
