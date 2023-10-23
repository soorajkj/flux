"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { classnames } from "~lib/utlis";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={classnames(
        [
          "relative",
          "flex",
          "h-10",
          "w-10",
          "shrink-0",
          "rounded-full",
          "border",
          "border-color-base-800/10",
          "bg-color-base-050",
          "font-semibold",
        ],
        className
      )}
      {...rest}
    >
      {children}
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-color-base-000 bg-color-success-400" />
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={classnames(["aspect-square", "h-full", "w-full"], className)}
      {...rest}
    />
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={classnames(
        [
          "flex",
          "h-full",
          "w-full",
          "items-center",
          "justify-center",
          "rounded-full",
          "text-sm",
          "font-semibold",
          "leading-none",
          "text-color-base-500",
        ],
        className
      )}
      {...rest}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
