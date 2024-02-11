"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, asChild, className, ...rest } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp ref={ref} className={cx(ButtonStyles({ className }))} {...rest}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

export const ButtonStyles = cva([
  "tweede-button",
  "inline-flex",
  "items-center",
  "justify-center",
  "whitespace-nowrap",
  "rounded-md",
  "text-sm",
  "font-medium",
  "ring-offset-background",
  "transition-colors",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-ring",
  "focus-visible:ring-offset-2",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
]);
