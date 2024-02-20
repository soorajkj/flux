import React from "react";
import { LayoutProps } from "~types/layout";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-hidden">
      <header>Header</header>
      <main className="flex-1">{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
