import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva([''], {
  variants: {},
  defaultVariants: {},
});

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {
  loading?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, type = 'button', className, style, ...rest }: ButtonProps,
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={ButtonStyles({ className })}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
});
