"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "src/lib/utils";

const buttonVariants = cva([
  "relative",
  "inline-flex",
  "justify-center",
  "items-center",
  "text-center",
  "text-sm",
  "leading-none",
  "rounded",
  "py-2.5",
  "px-4",
  "cursor-pointer",
  "select-none",
  "outline-none",
]);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  block?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, asChild, loading, disabled, className, ...rest } = props;

    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={clsx(buttonVariants({ className }))}
        disabled={loading || disabled}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };
