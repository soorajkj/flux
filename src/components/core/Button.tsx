"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const buttonStyles = cva(
  "inline-flex cursor-pointer select-none items-center justify-center rounded-md border border-color-transparent px-2 py-2.5 text-sm font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        unstyled: "",
        link: "",
        primary:
          "border-color-primary-500 bg-color-primary-500 text-color-grey-000 hover:border-color-primary-600 hover:bg-color-primary-600 hover:text-color-grey-000 focus-visible:border-color-primary-500 focus-visible:bg-color-primary-500 focus-visible:ring-4 focus-visible:ring-color-primary-050",
        secondary: "",
        ghost: "",
        outline: "",
        destruct: "",
      },
      block: {
        false: "w-auto",
        true: "w-full",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  loading?: boolean;
  block?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      loading,
      asChild,
      block,
      variant = "unstyled",
      className,
      ...rest
    } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={classnames(buttonStyles({ block, variant, className }))}
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
