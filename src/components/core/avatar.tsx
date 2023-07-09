"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const avatarStyles = cva(
  "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-purple-800 font-semibold"
);

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarStyles> {}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={classnames(avatarStyles({ className }))}
      {...rest}
    />
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

const avatarImageStyles = cva("aspect-square h-full w-full");

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    VariantProps<typeof avatarImageStyles> {}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={classnames(avatarImageStyles({ className }))}
      {...rest}
    />
  );
});

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const avatarFallbackStyles = cva(
  "bg-purple-800 text-neutral-50 text-xs font-semibold leading-none flex h-full w-full items-center justify-center rounded-full"
);

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackStyles> {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={classnames(avatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
