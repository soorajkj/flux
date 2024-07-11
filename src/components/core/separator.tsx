"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface SeparatorOwnProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical";
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorOwnProps & VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
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
      className={cn(SeparatorStyles({ orientation, className }))}
      {...rest}
    />
  );
});

const SeparatorStyles = cva(
  [
    "tesseract-separator",
    "relative",
    "shrink-0",
    "pointer-events-none",
    "bg-alpha-0400",
  ],
  {
    variants: {
      orientation: {
        horizontal: "w-full h-px",
        vertical: "h-full w-px",
      },
    },
  }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
