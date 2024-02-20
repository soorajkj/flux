"use client";

import React from "react";
import { handleSignout } from "~app/(auth)/action";
import useUser from "~hooks/use-user";
import Avatar from "~components/core/avatar";
import Button from "~components/core/button";

export default function UserProfile() {
  const { loading, user } = useUser();

  if (loading) return null;

  return (
    <div className="fixed bottom-6 right-24">
      <Button
        variant="unstyled"
        className="cursor-pointer"
        onClick={() => handleSignout()}
        asChild={false}
      >
        <Avatar.AvatarRoot>
          <Avatar.AvatarFallback>{user.email}</Avatar.AvatarFallback>
          <Avatar.AvatarImage
            src={user.user_metadata.avatar_url || ""}
            alt={user.user_metadata.preferred_username || ""}
          ></Avatar.AvatarImage>
        </Avatar.AvatarRoot>
      </Button>
    </div>
  );
}
