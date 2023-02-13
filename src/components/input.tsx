import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const InputStyles = cva(
  'relative inline-block border border-color-tertiary bg-color-primary-light py-2 px-3 rounded text-color-secondary-dark placeholder:text-color-tertiary'
);

interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', className, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={InputStyles({ className })}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
