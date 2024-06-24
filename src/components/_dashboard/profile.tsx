"use client";

import * as React from "react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Avatar from "@/components/core/avatar";

interface ProfileProps {
  session: Session | null;
}

export default function Profile(props: ProfileProps) {
  const { session } = props;

  return (
    <div className="flex items-center justify-start gap-2">
      <Avatar.AvatarRoot onClick={() => signOut()}>
        <Avatar.AvatarImage
          src={session?.user?.image}
          alt={"profile picture of " + session?.user?.name}
        />
        <Avatar.AvatarFallback>
          {session?.user?.name.slice(0, 1)}
        </Avatar.AvatarFallback>
      </Avatar.AvatarRoot>
      <div className="flex flex-col">
        <p className="text-sm">{session?.user?.name}</p>
        <p className="text-sm">{session?.user?.email}</p>
      </div>
    </div>
  );
}
