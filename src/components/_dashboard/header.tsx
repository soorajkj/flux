"use client";

import React from "react";
import { handleSignout } from "~app/(auth)/action";
import Avatar from "~components/core/avatar";
import Button from "~components/core/button";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="tesseract-header relative">
      <div className="w-full px-4">
        <div className="flex min-h-16 justify-between">
          <div className="inline-flex w-12 items-center">
            <Logo href={"/"}></Logo>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <Button
              unstyled
              className="cursor-pointer"
              onClick={() => handleSignout()}
            >
              <Avatar.AvatarRoot>
                <Avatar.AvatarFallback></Avatar.AvatarFallback>
                <Avatar.AvatarImage src="" alt=""></Avatar.AvatarImage>
              </Avatar.AvatarRoot>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
