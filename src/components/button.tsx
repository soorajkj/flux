import { cva, VariantProps } from 'class-variance-authority';

const styles = cva(
  [
    'relative inline-flex items-center justify-center border border-color-transparent',
  ],
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      block: {
        true: 'w-full',
      },
      disabled: {
        true: 'pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface Props
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof styles> {}

export default function Button({
  children,
  type = 'button',
  variant,
  className,
  style,
  block,
  disabled,
  onClick,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={styles({ variant, block, disabled, className })}
      style={style}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
