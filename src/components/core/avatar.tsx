"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AvatarRootProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AvatarRootStyles> {}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarRootProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(AvatarRootStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof AvatarFallbackStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(AvatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof AvatarImageStyles>
>((props, ref) => {
  const { className, src, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      src={src}
      className={cn(AvatarImageStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarRootStyles = cva(
  [
    "relative",
    "flex",
    "h-9",
    "w-9",
    "shrink-0",
    "overflow-hidden",
    "rounded-full",
  ],
  {
    variants: {},
  }
);

const AvatarFallbackStyles = cva([
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "border",
  "border-misty-300",
  "bg-misty-200",
  "text-misty-600",
  "rounded-full",
  "dark:border-misty-800",
  "dark:bg-misty-800",
  "dark:text-misty-500",
]);

const AvatarImageStyles = cva([
  "static",
  "block",
  "aspect-square",
  "h-full",
  "w-full",
]);

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const Avatar = { AvatarRoot, AvatarFallback, AvatarImage };

export default Avatar;
