"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface SeparatorOwnProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorOwnProps & VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
    children,
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cx(SeparatorStyles({ orientation, className }))}
      {...rest}
    >
      <span className={SeparatorBorderStyles({ orientation, className })} />
      {children && <span className="px-2">{children}</span>}
      <span className={SeparatorBorderStyles({ orientation, className })} />
    </SeparatorPrimitive.Root>
  );
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;

const SeparatorStyles = cva(
  [
    "tesseract-separator",
    "relative",
    "flex",
    "items-center",
    "shrink-0",
    "pointer-events-none",
  ],
  {
    variants: {
      orientation: {
        horizontal: [""],
        vertical: ["h-full", "w-px", "bg-neutral-200", "dark:bg-neutral-800"],
      },
    },
  }
);

const SeparatorBorderStyles = cva([""], {
  variants: {
    orientation: {
      horizontal: ["h-px", "w-full", "bg-neutral-200", "dark:bg-neutral-800"],
      vertical: [""],
    },
  },
});
