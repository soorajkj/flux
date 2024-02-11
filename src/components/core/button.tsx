"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      variant = "primary",
      fullWidth = false,
      className,
      ...rest
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cx(
          ButtonStyles({ variant, className }),
          fullWidth && "w-full"
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

export const ButtonStyles = cva(
  [
    "tesseract-button",
    "cursor-pointer",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "w-auto",
    "px-4",
    "py-3",
    "border",
    "border-transparent",
    "font-family-shantell-sans",
    "text-sm",
    "font-medium",
    "leading-none",
    "ring-offset-zinc-50",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-zinc-900/50",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-zinc-900",
          "text-zinc-50",
          "border-zinc-900",
          "hover:bg-zinc-900/80",
        ],
        secondary: [
          "bg-zinc-900/5",
          "text-zinc-900",
          "border-transparent",
          "hover:bg-zinc-900/5",
          "hover:border-zinc-900/5",
        ],
        outline: [
          "bg-zinc-50",
          "text-zinc-900",
          "border-zinc-900/10",
          "hover:bg-zinc-900/5",
        ],
        link: [
          "bg-transparent",
          "text-blue-500",
          "border-transparent",
          "hover:bg-transparent",
          "hover:underline",
          "hover:underline-offset-2",
        ],
        ghots: [
          "bg-transparent",
          "text-zinc-900",
          "border-transparent",
          "hover:bg-zinc-900/5",
        ],
        destruct: [
          "bg-red-500",
          "text-zinc-50",
          "border-red-500",
          "hover:bg-red-500/80",
        ],
      },
    },
  }
);
