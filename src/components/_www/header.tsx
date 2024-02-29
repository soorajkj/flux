"use client";

import Link from "next/link";
import { hrefs } from "~constants/routes";
import Button from "~components/core/button";
import Container from "~components/core/container";
import Separator from "~components/core/separator";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50/60 backdrop-blur-md dark:bg-neutral-900/60">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo href={hrefs.root} scroll></Logo>
          <div className="hidden flex-1 justify-end space-x-4 md:flex">
            <Button variant="default" asChild>
              <Link href={hrefs.signin}>Login</Link>
            </Button>
            <Separator orientation="vertical" className="h-auto" />
            <Button variant="primary" asChild>
              <Link href={hrefs.signup}>Try Tesseract free</Link>
            </Button>
          </div>
        </div>
      </Container>
      <Separator />
    </header>
  );
}
