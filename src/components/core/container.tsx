"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

interface ContainerProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof ContainerStyles> {
  children?: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children, variant = "small", className, ...rest } = props;

  return (
    <div
      className={classnames(ContainerStyles({ variant, className }))}
      {...rest}
    >
      {children}
    </div>
  );
}

const ContainerStyles = cva(
  [
    "daybook-container",
    "static",
    "mx-auto",
    "h-auto",
    "w-full",
    "px-4",
    "md:px-6",
  ],
  {
    variants: {
      variant: {
        small: "!max-w-screen-xl",
        big: "!max-w-screen-2xl",
      },
    },
  }
);
