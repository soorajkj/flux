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
    "rounded",
    "border",
    "border-solid",
    "border-transparent",
    "px-3",
    "py-0.5",
    "h-8",
    "min-w-fit",
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
        primary: [
          "bg-blue-500",
          "text-white",
          "dark:bg-blue-600",
          "dark:text-zinc-50",
          "dark:border-blue-600",
          "dark:hover:bg-blue-500",
          "dark:hover:border-blue-500",
        ],
        link: [],
        destruct: [],
        outline: [
          "border-zinc-700",
          "text-zinc-300",
          "hover:bg-zinc-600/25",
          "dark:bg-transparent",
          "dark:text-zinc-400",
          "dark:border-zinc-900",
          "dark:hover:text-zinc-50",
          "dark:hover:bg-zinc-900",
        ],
        ghost: [
          "border-zinc-700",
          "text-zinc-300",
          "hover:bg-zinc-600/25",
          "dark:bg-transparent",
          "dark:text-zinc-400",
          "dark:border-transparent",
        ],
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
