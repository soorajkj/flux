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
      variant = "default",
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
    "rounded",
    "border",
    "border-transparent",
    "space-x-2",
    "px-3",
    "py-0.5",
    "h-8",
    "text-sm",
    "font-normal",
    "leading-none",
    "transition-colors",
    "disabled:cursor-none",
    "disabled:pointer-events-none",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        default: ["bg-blue-500 text-white"],
        primary: [],
        link: [],
        destruct: [],
        outline: [
          "border-neutral-700 text-neutral-300 hover:bg-neutral-600/25",
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
