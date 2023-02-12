/* eslint-disable @next/next/no-img-element */
'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="">
      <p>Thanks {session.user.name} for logged in</p>
      <img src={session.user.image} alt="" className="h-8 w-8 rounded-full" />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
