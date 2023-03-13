import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const InputStyles = cva(
  'relative inline-block leading-none border border-color-tertiary bg-color-transparent py-3 px-4 rounded'
);

interface InputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof InputStyles> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={InputStyles({ className })}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
