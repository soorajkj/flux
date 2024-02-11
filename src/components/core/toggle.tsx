"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cx } from "~lib/utils";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cx(["tweede-toggle", "select-none"], className)}
      {...rest}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
