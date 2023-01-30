'use client';

import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'relative inline-flex cursor-pointer select-none items-center justify-center truncate rounded-md py-2 px-4 text-sm font-regular transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default: '',
        destructive: '',
        outline: '',
        subtle: '',
        ghost: '',
        link: '',
      },
    },
  }
);

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, type = 'button', variant = 'default', className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={ButtonStyles({ variant, className })}
      {...props}
    >
      {children}
    </button>
  );
});
