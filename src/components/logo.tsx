"use client";

import { CSSProperties, Fragment } from "react";
import Link, { type LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import TesseractSVG from "public/icons/logo.svg";
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
        <TesseractSVG />
        <span>Tesseract</span>
      </Link>
    </Fragment>
  );
}

const LogoStyles = cva([
  "inline-flex",
  "cursor-pointer",
  "items-center",
  "space-x-2",
  "font-family-shantell-sans",
  "text-lg",
  "font-extrabold",
  "leading-none",
  "text-zinc-900",
  "focus:outline-none",
]);
