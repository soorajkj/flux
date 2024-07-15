"use client";

import { cva, VariantProps } from "class-variance-authority";
import * as ResizablePrimitive from "react-resizable-panels";
import { cn } from "@/lib/utils";
import Icon from "@/components/core/icon";

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      ["flex h-full w-full data-[panel-group-direction=vertical]:flex-col"],
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>,
    VariantProps<typeof ResizableHandleStyles> {}

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ResizableHandleProps & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(ResizableHandleStyles({ className }))}
    {...props}
  >
    {withHandle && (
      <div className="bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-800 z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
        <Icon icon="resizable" label="resize panel" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

const ResizableHandleStyles = cva([
  "bg-zinc-200",
  "focus-visible:ring-ring",
  "relative",
  "flex",
  "w-px",
  "items-center",
  "justify-center",
  "after:absolute",
  "after:inset-y-0",
  "after:left-1/2",
  "after:w-1",
  "after:-translate-x-1/2",
  "focus-visible:outline-none",
  "focus-visible:ring-1",
  "focus-visible:ring-offset-1",
  "data-[panel-group-direction=vertical]:h-px",
  "data-[panel-group-direction=vertical]:w-full",
  "data-[panel-group-direction=vertical]:after:left-0",
  "data-[panel-group-direction=vertical]:after:h-1",
  "data-[panel-group-direction=vertical]:after:w-full",
  "data-[panel-group-direction=vertical]:after:-translate-y-1/2",
  "data-[panel-group-direction=vertical]:after:translate-x-0",
  "[&[data-panel-group-direction=vertical]>div]:rotate-90",
  "dark:bg-zinc-800",
]);

const Resizable = { ResizablePanelGroup, ResizablePanel, ResizableHandle };

export default Resizable;
