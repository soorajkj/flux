import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(['select-none'], {
  variants: {},
  defaultVariants: {},
});

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
  style,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={ButtonStyles({})} style={style} {...rest}>
      {children}
    </button>
  );
}
