'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { clsx } from '@/libs/utils';

const buttonVariants = cva(
  [
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'text-center',
    'text-sm',
    'leading-none',
    'rounded',
    'py-2.5',
    'px-4',
    'cursor-pointer',
    'select-none',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',
    'disabled:opacity-70',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      block: {
        true: ['w-full'],
        false: ['w-auto'],
      },
      variant: {
        default: [''],
        link: [''],
        destruct: [''],
        outline: [''],
        ghost: [''],
      },
    },
    defaultVariants: {
      block: false,
      variant: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  block?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    asChild,
    loading,
    disabled,
    variant,
    block,
    className,
    ...rest
  } = props;

  const Component = !asChild ? 'button' : Slot;

  return (
    <Component
      ref={ref}
      className={clsx(buttonVariants({ variant, block, className }))}
      disabled={loading || disabled}
      {...rest}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export { Button };
