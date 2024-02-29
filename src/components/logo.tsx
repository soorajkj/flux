"use client";

import { CSSProperties, Fragment } from "react";
import Link, { type LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface LogoProps extends LinkProps, VariantProps<typeof LogoStyles> {
  className?: string | any;
  style?: CSSProperties;
}

export default function Logo(props: LogoProps) {
  const { href, className, ...rest } = props;

  return (
    <Fragment>
      <Link href={href} className={cx(LogoStyles({ className }))} {...rest}>
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:bg-neutral-50/60 after:backdrop-blur-md dark:border-neutral-800 after:dark:bg-neutral-900/20">
          <span className="h-5 w-5 rounded-full bg-neutral-900 dark:bg-white"></span>
        </div>
      </Link>
    </Fragment>
  );
}

const LogoStyles = cva([
  "inline-flex",
  "cursor-pointer",
  "items-center",
  "space-x-2",
  "font-family-inter",
  "text-xl",
  "font-semibold",
  "leading-none",
  "text-neutral-800",
  "focus:outline-none",
]);
