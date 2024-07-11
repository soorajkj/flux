"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer relative h-4 w-4 shrink-0 overflow-hidden rounded border border-neutral-400 bg-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-neutral-900 data-[state=indeterminate]:border-neutral-900 data-[state=checked]:bg-neutral-900 data-[state=indeterminate]:bg-neutral-900 data-[state=checked]:text-white data-[state=indeterminate]:text-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center text-current">
      <Check
        className="hidden h-3 w-3 group-data-[state=checked]:block"
        strokeWidth={3}
      />
      <Minus
        className="hidden h-3 w-3 group-data-[state=indeterminate]:block"
        strokeWidth={3}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
