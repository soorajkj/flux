import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden min-w-80 border-r border-zinc-200 dark:border-zinc-800">
      <div className="flex h-14 w-full items-center border-b border-zinc-200 px-4 dark:border-zinc-800 lg:h-16"></div>
      <nav className="px-4 py-4"></nav>
    </div>
  );
}
