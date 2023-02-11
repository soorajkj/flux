import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const ButtonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100'
);

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, type = 'button', className, ...rest } = props;

    return (
      <button
        ref={ref}
        type={type}
        className={ButtonStyles({ className })}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
