import React from "react";
import { LayoutProps } from "~types/layout";
import Separator from "~components/core/separator";
import Footer from "~components/_dashboard/footer";
import Header from "~components/_dashboard/header";
import Routesbar from "~components/_dashboard/routesbar";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Header />
      <Separator />
      <main className="mx-auto flex w-full flex-1 overflow-hidden px-6">
        <Routesbar />
        <Separator orientation="vertical" className="h-auto" />
        <div className="flex-1">{children}</div>
      </main>
      <Separator />
      <Footer />
    </div>
  );
}
