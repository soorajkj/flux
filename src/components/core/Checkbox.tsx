"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "~components/core/Icon";
import { classnames } from "~lib/utlis";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={classnames(
        [
          "peer",
          "h-4",
          "w-4",
          "shrink-0",
          "overflow-hidden",
          "rounded",
          "border",
          "border-color-base-200",
          "hover:border-color-primary-500",
          "hover:bg-color-primary-050",
          "focus-visible:border-color-primary-200",
          "focus-visible:bg-color-primary-000",
          "focus-visible:outline-none",
          "focus-visible:ring-4",
          "focus-visible:ring-color-primary-050",
          "disabled:border-color-base-200",
          "disabled:bg-color-base-050",
          "disabled:opacity-50",
          "data-[state=checked]:border-color-primary-500",
          "data-[state=checked]:bg-color-primary-025/50",
          "data-[state=checked]:text-color-primary-500",
          "data-[state=checked]:hover:bg-color-primary-050/50",
          "data-[state=checked]:disabled:border-color-base-200",
          "data-[state=checked]:disabled:bg-color-base-050",
          "data-[state=checked]:disabled:text-color-base-200",
        ],
        className
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={classnames("text-current flex items-center justify-center")}
      >
        <Icon icon="check" className="h-4 w-4" strokeWidth={2.5} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
