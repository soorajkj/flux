"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~utils/classnames";

const buttonStyles = cva(
  "relative flex justify-center items-center select-none cursor-pointer disabled:cursor-auto px-2 py-2 rounded transition",
  {
    variants: {
      variant: {
        primary: "bg-color-accent-dark text-color-accent-contrast",
        secondary: "bg-color-primary-light text-color-secondary",
        ghost: "hover:bg-color-primary-light hover:text-color-accent-contrast",
        outline: "border border-color-divider hover:bg-color-primary-light",
        destruct: "bg-color-destruct text-color-accent-contrast",
        link: "hover:underline",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, loading, asChild, variant, className, ...rest } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={classnames(buttonStyles({ variant, className }))}
        disabled={loading}
        tabIndex={loading ? -1 : 0}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };
