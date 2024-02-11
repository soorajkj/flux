import React from "react";
import { LayoutProps } from "~types/layout";
import Footer from "~components/_www/footer";
import Header from "~components/_www/header";

export default function layout({ children }: LayoutProps) {
  return (
    <div className="w-ful relative flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
