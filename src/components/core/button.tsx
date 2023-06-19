"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~utils/classnames";

const buttonStyles = cva(
  "relative inline-flex justify-center items-center select-none cursor-pointer disabled:cursor-auto px-6 py-2 rounded transition text-center leading-tight",
  {
    variants: {
      variant: {
        primary: "bg-purple-700 text-white hover:bg-purple-500",
        secondary: "",
        link: "",
        destruct: "",
        ghost: "",
        outline: "",
      },
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
    const {
      children,
      loading,
      asChild,
      variant = "primary",
      className,
      ...rest
    } = props;
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
