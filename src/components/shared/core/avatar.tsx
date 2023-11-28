"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof AvatarRootStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cx(AvatarRootStyles({ className }))}
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
      className={cx(AvatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof AvatarImageStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cx(AvatarImageStyles({ className }))}
      {...rest}
    />
  );
});

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const Avatar = { AvatarRoot, AvatarFallback, AvatarImage };

export default Avatar;

const AvatarRootStyles = cva([
  "tweede-avatar",
  "relative",
  "flex",
  "h-10",
  "w-10",
  "shrink-0",
  "overflow-hidden",
  "rounded-full",
]);

const AvatarFallbackStyles = cva([
  "tweede-avatar__fallback",
  "bg-neutral-200",
  "text-neutral-900",
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "rounded-full",
  "dark:bg-neutral-800",
  "dark:text-neutral-200",
]);

const AvatarImageStyles = cva([
  "tweede-avatar__image",
  "pointer-events-none",
  "aspect-square",
  "h-full",
  "w-full",
]);
