"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import Button from "@/components/core/button";
import Sheet from "@/components/core/sheet";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b px-4 dark:border-neutral-800 lg:h-16 lg:px-6">
      <Sheet.SheetRoot>
        <Sheet.SheetTrigger asChild>
          <Button variant="outline" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </Sheet.SheetTrigger>
        <Sheet.SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium"></nav>
        </Sheet.SheetContent>
      </Sheet.SheetRoot>
    </header>
  );
}
