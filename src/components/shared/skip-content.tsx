"use client";

import Link from "next/link";

export default function SkipContent() {
  return (
    <Link
      href="#main"
      aria-label="skip to main content of the page"
      className="absolute -left-full -top-full -z-50 h-px w-px overflow-hidden focus:left-auto focus:top-auto focus:z-50 focus:h-auto focus:w-auto focus:overflow-auto"
    >
      Skip to content
    </Link>
  );
}
