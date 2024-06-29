import * as React from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex h-full w-full flex-1 flex-col overflow-y-auto">
        <Header />
        <main className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col overflow-y-auto px-8 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}
