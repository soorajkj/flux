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
      "group peer relative h-4 w-4 shrink-0 overflow-hidden rounded border border-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-transparent data-[state=checked]:bg-zinc-50 data-[state=indeterminate]:bg-zinc-50 data-[state=checked]:text-zinc-50 data-[state=indeterminate]:text-zinc-50 dark:border-zinc-700 dark:data-[state=checked]:border-zinc-50 dark:data-[state=indeterminate]:border-zinc-50 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=indeterminate]:bg-zinc-50 dark:data-[state=checked]:text-zinc-950 dark:data-[state=indeterminate]:text-zinc-950",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center text-current">
      <Check className="hidden h-4 w-4 group-data-[state=checked]:block" />
      <Minus className="hidden h-4 w-4 group-data-[state=indeterminate]:block" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
