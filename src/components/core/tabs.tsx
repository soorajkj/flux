"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "mb-4 flex h-10 items-center border-0 border-zinc-200 dark:border-zinc-200/10",
      className
    )}
    {...props}
  />
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "-mb-px inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-2 pb-2.5 pt-3 text-sm font-normal leading-none text-zinc-700 transition-all hover:border-zinc-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-zinc-700 data-[state=active]:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-700 dark:data-[state=active]:border-zinc-50 dark:data-[state=active]:text-zinc-50",
      className
    )}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));

TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = { TabsRoot, TabsList, TabsTrigger, TabsContent };

export default Tabs;
