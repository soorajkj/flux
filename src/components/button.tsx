import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva([
  'relative inline-flex items-center justify-center border border-color-transparent',
]);

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {}

export default function Button({
  children,
  type = 'button',
  className,
  style,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={ButtonStyles({ className })}
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
