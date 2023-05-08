'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { clsx } from '@/libs/utils';

const buttonVariants = cva([
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
  'disabled:opacity-50',
  'disabled:pointer-events-none',
  'dark:bg-zinc-800',
  'dark:text-zinc-200',
]);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChildren?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChildren, className, ...rest } = props;

  const Component = !asChildren ? 'button' : Slot;

  return (
    <Component
      ref={ref}
      className={clsx(buttonVariants({ className }))}
      {...rest}
    />
  );
});

Button.displayName = 'Button';

export { Button };
