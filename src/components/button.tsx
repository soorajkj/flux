import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import Icon from '@/components/icon';

const ButtonStyles = cva(
  'relative inline-flex items-center justify-center rounded text-center text-sm font-medium leading-none whitespace-nowrap transition select-none overflow-hidden outline-none focus:ring-2 focus:ring-offset-1',
  {
    variants: {
      variant: {
        default: '',
        outline: '',
        link: '',
        subtle: '',
        ghost: '',
        destruct: '',
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
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
        {loading ? (
          <Icon icon="spin" width={16} height={16} className="animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
