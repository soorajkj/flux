import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva('');

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {}

export default function Button({ children }: ButtonProps) {
  return <button className={ButtonStyles({})}>{children}</button>;
}
