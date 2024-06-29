import React from "react";

export default function Sidebar() {
  return (
    <div className="hidden min-w-80 border-r border-neutral-200 dark:border-neutral-800">
      <div className="flex h-14 w-full items-center border-b border-neutral-200 px-4 dark:border-neutral-800 lg:h-16"></div>
      <nav className="px-4 py-4"></nav>
    </div>
  );
}
