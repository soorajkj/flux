'use client';

import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const ButtonStyles = cva(
  'relative inline-flex items-center justify-center rounded text-center text-sm font-medium leading-none whitespace-nowrap transition select-none overflow-hidden outline-none focus:ring-2 focus:ring-offset-1',
  {
    variants: {
      variant: {
        default: '',
      },
      block: {
        true: 'w-full',
        false: 'w-auto',
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
    VariantProps<typeof ButtonStyles> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    type = 'button',
    disabled,
    block = false,
    loading,
    variant,
    className,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={ButtonStyles({ block, variant, className })}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
