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
  unstyled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      variant = "default",
      unstyled = false,
      fullWidth = false,
      className,
      ...rest
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cx(
          !unstyled && ButtonStyles({ variant }),
          fullWidth && "w-full",
          className
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
    "relative",
    "whitespace-nowrap",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "w-auto",
    "h-10",
    "px-4",
    "py-1",
    "border",
    "border-transparent",
    "font-family-inter",
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
    "disabled:opacity-90",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-neutral-200/40",
          "text-neutral-900",
          "border-neutral-200/40",
          "hover:bg-neutral-300/40",
          "hover:text-neutral-900",
          "hover:border-neutral-300/40",
        ],
        primary: [
          "bg-neutral-900",
          "text-neutral-50",
          "border-neutral-900",
          "hover:bg-neutral-800",
          "hover:text-neutral-50",
          "hover:border-neutral-800",
        ],
        subtile: [
          "bg-emerald-600/5",
          "text-emerald-500",
          "border-emerald-500/20",
          "hover:bg-emerald-600/20",
          "hover:border-emerald-500/40",
        ],
        outline: [
          "bg-transparent",
          "text-neutral-700",
          "border-neutral-200",
          "hover:bg-neutral-200",
          "hover:text-neutral-800",
        ],
        link: [
          "hover:underline",
          "hover:underline-offset-4",
          "bg-transparent",
          "text-blue-600",
          "border-transparent",
          "hover:text-blue-600",
        ],
        ghots: [
          "bg-transparent",
          "text-neutral-900",
          "border-transparent",
          "hover:bg-neutral-200",
          "hover:text-neutral-900",
          "hover:border-neutral-200",
        ],
        destruct: [
          "bg-red-800",
          "text-neutral-200",
          "border-red-800",
          "hover:bg-red-700",
          "hover:text-neutral-50",
          "hover:border-red-700",
        ],
      },
    },
  }
);
