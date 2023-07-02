"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const buttonStyles = cva(
  "inline-flex cursor-pointer select-none items-center justify-center rounded-md border border-transparent px-2 py-2 text-sm font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-violet-700 text-neutral-50 hover:bg-violet-900 focus-visible:bg-violet-900",
        secondary:
          "bg-neutral-800/50 hover:bg-neutral-800/80 hover:text-neutral-50 focus-visible:bg-neutral-800/80 focus-visible:text-neutral-50",
        ghost:
          "hover:bg-neutral-800/50 hover:text-neutral-50 focus-visible:bg-neutral-800/50 focus-visible:text-neutral-50",
        outline:
          "text-neutral-50 border-neutral-800/50 hover:bg-neutral-800/50 focus-visible:bg-neutral-800/50",
        destruct:
          "bg-red-600 text-neutral-50 hover:bg-red-900 focus-visible:bg-red-900",
        link: "text-neutral-50 underline-offset-4 hover:underline focus-visible:underline",
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
      variant = "primary",
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
