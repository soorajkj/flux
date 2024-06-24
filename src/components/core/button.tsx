"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icon from "@/components/core/icon";

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
      variant,
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
        {loading && (
          <Icon
            icon="loader"
            style={{ animationDuration: "1000ms" }}
            className="animate-spin"
          />
        )}
        <span>{children}</span>
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
    "border-transparent",
    "space-x-2",
    "px-4",
    "py-2.5",
    "h-10",
    "text-sm",
    "font-medium",
    "leading-none",
    "transition-colors",
    "ring-offset-neutral-50",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-neutral-300",
    "focus-visible:ring-offset-2",
    "disabled:cursor-none",
    "disabled:pointer-events-none",
    "disabled:opacity-80",
    "dark:ring-offset-neutral-900",
    "dark:focus-visible:ring-neutral-700",
  ],
  {
    variants: {
      variant: {
        default: [],
        primary: [],
        link: [],
        destruct: [],
        outline: [],
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
