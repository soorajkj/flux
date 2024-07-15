"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof LabelStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(LabelStyles({ className }))}
      {...rest}
    />
  );
});

const LabelStyles = cva([
  "inline-block",
  "text-sm",
  "font-medium",
  "leading-none",
  "text-gray-700",
  "peer-disabled:cursor-not-allowed",
  "peer-disabled:opacity-70",
]);

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
