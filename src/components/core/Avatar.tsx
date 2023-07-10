"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { classnames } from "~lib/utlis";

const avatarStyles = cva(
  "relative flex h-10 w-10 overflow-hidden shrink-0 rounded-full font-semibold border border-color-grey-800/10 bg-color-grey-050"
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
  "text-sm font-semibold leading-none text-color-grey-500 flex h-full w-full items-center justify-center rounded-full"
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
