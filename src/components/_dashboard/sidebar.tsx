import React from "react";
import { auth } from "@/auth";
import Profile from "@/components/dashboard/profile";

export default async function Sidebar() {
  const session = await auth();

  return (
    <div className="hidden min-w-80 border-r border-neutral-200 dark:border-neutral-800 md:block">
      <div className="flex h-14 w-full items-center border-b border-neutral-800 px-4 lg:h-16">
        <Profile session={session} />
      </div>
      <div className="px-4 py-4">Sidebar</div>
    </div>
  );
}
