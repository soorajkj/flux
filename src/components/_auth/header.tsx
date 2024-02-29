import React from "react";
import Container from "~components/core/container";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-50/60 backdrop-blur-md dark:bg-neutral-900/60">
      <Container>
        <div className="flex items-center py-4">
          <Logo href={"/"}></Logo>
        </div>
      </Container>
    </header>
  );
}
