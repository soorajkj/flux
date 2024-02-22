"use client";

import Link from "next/link";
import Button from "~components/core/button";
import Icon from "~components/core/icon";
import Separator from "~components/core/separator";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-900/60 backdrop-blur-md">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="flex items-center py-4">
          <Logo href="/" scroll />
          <Button
            className="ml-6 inline-flex h-9 cursor-pointer select-none items-center justify-center space-x-1 rounded-md"
            unstyled
          >
            <Icon
              icon="github"
              height={24}
              width={24}
              className="fill-neutral-600"
              label="github.com"
            ></Icon>
            <span className="text-xs">20.2k</span>
          </Button>
          <div className="hidden flex-1 justify-end gap-4 md:flex">
            <Button variant="ghots">Try Tesseract Free</Button>
            <Separator orientation="vertical" className="h-auto" />
            <Button variant="primary" asChild>
              <Link href="/signin">Login to App</Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
