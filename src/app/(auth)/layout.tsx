import React from "react";
import { LayoutProps } from "~types/layout";
import Container from "~components/core/container";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <main className="flex-1">
        <Container>
          <div className="py-12 md:py-24">{children}</div>
        </Container>
      </main>
    </div>
  );
}
