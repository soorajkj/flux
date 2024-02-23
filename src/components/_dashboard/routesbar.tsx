"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "~constants/routes";
import { cx } from "~lib/utils";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

export default function Routesbar() {
  const pathname = usePathname();

  return (
    <aside className="w-16 overflow-y-auto">
      <nav className="flex flex-col">
        <ul className="space-y-2 px-2 py-4">
          {routes.map(({ icon, name, url }, idx) => {
            return (
              <li key={idx}>
                <Button
                  asChild
                  variant="ghots"
                  fullWidth
                  className={cx(
                    "h-12 w-12 text-neutral-600",
                    pathname === url && "bg-neutral-800 text-neutral-300"
                  )}
                >
                  <Link href={url}>
                    <Icon icon={icon} width={24} height={24} />
                    <span className="sr-only">{name}</span>
                  </Link>
                </Button>
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>
    </aside>
  );
}
