"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Icon } from "~components/core/Icon";
import { classnames } from "~lib/utlis";

const Dropdown = DropdownMenuPrimitive.Root;

const DropdownTrigger = DropdownMenuPrimitive.Trigger;

const DropdownPortal = DropdownMenuPrimitive.Portal;

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={classnames(
        [
          "text-neutral-200",
          "z-50",
          "mx-2",
          "min-w-[11.25rem]",
          "overflow-hidden",
          "rounded-md",
          "border",
          "border-color-base-050",
          "bg-color-base-000",
          "shadow-sm",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95",
          "data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
        ],
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={classnames(
      ["font-semibold", "text-color-base-600"],
      inset && "pl-8",
      className
    )}
    {...props}
  />
));

DropdownLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={classnames(["h-px", "bg-color-base-100"], className)}
    {...props}
  />
));

DropdownSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={classnames(
      [
        "relative",
        "flex",
        "cursor-pointer",
        "select-none",
        "items-center",
        "rounded-sm",
        "px-4",
        "py-2.5",
        "font-medium",
        "outline-none",
        "transition-colors",
        "focus:bg-color-base-050/50",
        "focus:text-color-base-600",
        "disabled:cursor-default",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
      ],
      inset && "pl-8",
      className
    )}
    {...props}
  />
));

DropdownItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownGroup = DropdownMenuPrimitive.Group;

const DropdownSub = DropdownMenuPrimitive.Sub;

const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={classnames(
      [
        "focus:bg-neutral-900",
        "data-[state=open]:bg-neutral-900",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "px-2",
        "py-1.5",
        "text-sm",
        "outline-none",
      ],
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon="chevronRight" className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));

DropdownSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={classnames(
      [
        "bg-neutral-900",
        "text-neutral-900",
        "z-50",
        "min-w-[8rem]",
        "overflow-hidden",
        "rounded-md",
        "border",
        "p-1",
        "shadow-lg",
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
      ],
      className
    )}
    {...props}
  />
));

DropdownSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={classnames(
      [
        "focus:bg-accent",
        "focus:text-accent-foreground",
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "py-1.5",
        "pl-8",
        "pr-2",
        "text-xs",
        "outline-none",
        "transition-colors",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
      ],
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon icon="check" className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));

DropdownCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={classnames(
      [
        "focus:bg-accent",
        "focus:text-accent-foreground",
        "relative",
        "flex",
        "cursor-default",
        "select-none",
        "items-center",
        "rounded-sm",
        "py-1.5",
        "pl-8",
        "pr-2",
        "text-xs",
        "outline-none",
        "transition-colors",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
      ],
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon icon="check" className="fill-current h-2 w-2" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));

DropdownRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={classnames(
        [
          "ml-auto",
          "text-xs",
          "font-normal",
          "tracking-widest",
          "text-color-base-400",
        ],
        className
      )}
      {...props}
    />
  );
};

DropdownShortcut.displayName = "DropdownShortcut";

export {
  Dropdown,
  DropdownTrigger,
  DropdownPortal,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownShortcut,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownRadioGroup,
};
