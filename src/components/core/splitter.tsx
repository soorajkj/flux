"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "@/utils/classnames";

const splitterStyles = cva("shrink-0 bg-color-divider-light", {
  variants: {
    orientation: {
      vertical: "w-px h-full",
      horizontal: "h-px w-full",
    },
  },
});

interface SplitterProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof spliietrStyles> {}

const Splitter = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SplitterProps
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
      className={classnames(splitterStyles({ orientation, className }))}
      {...rest}
    />
  );
});

Splitter.displayName = SeparatorPrimitive.Root.displayName;

export { Splitter };
