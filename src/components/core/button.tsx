import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { tailwind } from '@/libs/utils';

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
  immediate?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ immediate, className, ...rest }, ref) => {
    // render the element as it's immediate child
    // and merges its props onto its immediate child
    const Component = !immediate ? 'button' : Slot;

    return (
      <Component
        ref={ref}
        className={tailwind(buttonVariants({ className }))}
        {...rest}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
