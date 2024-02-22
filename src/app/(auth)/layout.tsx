import React from "react";
import { LayoutProps } from "~types/layout";
import Container from "~components/core/container";
import Separator from "~components/core/separator";
import Header from "~components/_www/header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <Separator />
      <main className="flex flex-1">
        <section className="relative m-auto">
          <Container>
            <div className="py-12 md:py-24">{children}</div>
          </Container>
        </section>
      </main>
    </div>
  );
}
