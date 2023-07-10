"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import { Icon } from "~components/core/Icon";
import { classnames } from "~lib/utlis";

const checkboxStyles = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden"
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxStyles> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={classnames(checkboxStyles({ className }))}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={classnames("leading-none text-neutral-50")}
      >
        <Icon icon="check" className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
