"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof CheckboxStyles> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(CheckboxStyles({ className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center text-current">
      <Check className="hidden h-3.5 w-3.5 group-data-[state=checked]:block" />
      <Minus className="hidden h-3.5 w-3.5 group-data-[state=indeterminate]:block" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

const CheckboxStyles = cva([
  "group",
  "peer",
  "relative",
  "size-4",
  "shrink-0",
  "overflow-hidden",
  "rounded",
  "border",
  "border-gray-300",
  "bg-white",
  "ring-offset-brand-100",
  "hover:border-brand-600",
  "focus-visible:border-brand-300",
  "focus-visible:outline-none",
  "focus-visible:ring-0",
  "focus-visible:ring-transparent",
  "focus-visible:ring-offset-4",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "data-[state=checked]:border-brand-600",
  "data-[state=indeterminate]:border-brand-600",
  "data-[state=checked]:bg-brand-600",
  "data-[state=indeterminate]:bg-brand-600",
  "data-[state=checked]:text-white",
  "data-[state=indeterminate]:text-white",
]);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
