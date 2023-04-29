import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { classnames } from '@/utils/classnames';

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
]);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classnames(buttonVariants({ className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
