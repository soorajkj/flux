"use client";

import Link from "next/link";
import { hrefs } from "~constants/routes";
import Button from "~components/core/button";
import Separator from "~components/core/separator";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50/60 backdrop-blur-md">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="flex items-center justify-between py-4">
          <Logo href={hrefs.root} scroll></Logo>
          <div className="hidden flex-1 justify-end space-x-4 md:flex">
            <Button variant="primary" asChild>
              <Link href={hrefs.signup}>Try Tesseract free</Link>
            </Button>
            <Separator orientation="vertical" className="h-auto" />
            <Button variant="default" asChild>
              <Link href={hrefs.signin}>Login</Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
