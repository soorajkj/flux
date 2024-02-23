"use client";

import { CSSProperties, Fragment } from "react";
import Link, { type LinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import TesseractSVG from "public/images/tesseract-icon.svg";
import TesseractIcon from "public/images/tesseract-icon.svg";
import { cx } from "~lib/utils";

interface LogoProps extends LinkProps, VariantProps<typeof LogoStyles> {
  className?: string | any;
  style?: CSSProperties;
  iconOnly?: boolean;
}

export default function Logo(props: LogoProps) {
  const { href, iconOnly = false, className, ...rest } = props;

  return (
    <Fragment>
      <Link href={href} className={cx(LogoStyles({ className }))} {...rest}>
        {iconOnly ? (
          <TesseractIcon />
        ) : (
          <Fragment>
            <TesseractSVG />
            <span>Untitled</span>
          </Fragment>
        )}
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
  "font-bold",
  "leading-none",
  "text-neutral-900",
  "focus:outline-none",
]);
