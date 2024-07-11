"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  pure?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      disabled = false,
      loading = false,
      pure = false,
      variant = "primary",
      full,
      className,
      ...rest
    } = props;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={disabled || loading}
        tabIndex={disabled || loading ? -1 : 0}
        className={cn(!pure && ButtonStyles({ variant, full }), className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

const ButtonStyles = cva(
  [
    "cursor-pointer",
    "inline-flex",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "select-none",
    "whitespace-nowrap",
    "rounded-md",
    "border",
    "border-solid",
    "border-transparent",
    "px-3",
    "py-0.5",
    "h-9",
    "min-w-fit",
    "text-sm",
    "font-medium",
    "leading-none",
    "transition-colors",
    "disabled:cursor-none",
    "disabled:pointer-events-none",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-neutral-900",
          "text-white",
          "border-neutral-900",
          "hover:bg-neutral-800",
          "hover:border-neutral-800",
        ],
        link: [],
        destruct: [],
        outline: [
          "bg-white",
          "text-neutral-700",
          "border-neutral-200",
          "hover:bg-neutral-100",
          "hover:text-neutral-900",
        ],
        ghost: [],
      },
      full: {
        false: "w-auto",
        true: "w-full",
      },
    },
  }
);

Button.displayName = "Button";

export default Button;
