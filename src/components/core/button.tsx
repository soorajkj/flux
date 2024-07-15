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
      size = "md",
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
        className={cn(
          !pure && ButtonStyles({ variant, size, full }),
          className
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

const ButtonStyles = cva(
  [
    "inline-flex",
    "h-9",
    "min-w-fit",
    "cursor-pointer",
    "select-none",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "whitespace-nowrap",
    "rounded-md",
    "border",
    "border-solid",
    "border-transparent",
    "px-3",
    "py-0.5",
    "text-sm",
    "font-medium",
    "leading-none",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-0",
    "focus-visible:ring-transparent",
    "focus-visible:ring-offset-4",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-600",
          "text-white",
          "hover:bg-brand-700",
          "ring-offset-brand-100",
          "focus-visible:border-brand-300",
          "disabled:bg-brand-200",
        ],
        link: [
          "bg-white",
          "text-brand-700",
          "hover:text-brand-800",
          "ring-offset-brand-100",
          "focus-visible:border-brand-300",
        ],
        destruct: [
          "bg-error-600",
          "text-white",
          "border-error-600",
          "hover:bg-error-700",
          "ring-offset-error-100",
          "focus-visible:border-error-300",
        ],
        outline: [
          "bg-white",
          "text-gray-700",
          "border-gray-300",
          "hover:bg-gray-100",
          "hover:text-gray-800",
          "ring-offset-gray-100",
          "focus-visible:border-gray-300",
          "disabled:bg-brand-200",
          "disabled:text-gray-300",
          "disabled:border-gray-200",
        ],
        ghost: [
          "bg-white",
          "text-gray-700",
          "hover:bg-gray-100",
          "hover:text-gray-800",
          "ring-offset-gray-100",
          "focus-visible:border-gray-300",
          "disabled:bg-brand-200",
          "disabled:text-gray-300",
        ],
      },
      full: {
        false: "w-auto",
        true: "w-full",
      },
      size: {
        sm: [],
        md: [],
        lg: [],
      },
    },
  }
);

Button.displayName = "Button";

export default Button;
