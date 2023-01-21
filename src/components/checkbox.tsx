import { cva, VariantProps } from 'class-variance-authority';

const CheckboxStyles = cva(
  ['cursor-pointer select-none focus:ring-0 focus:ring-offset-0'],
  {
    variants: {},
    defaultVariants: {},
  }
);

interface CheckboxProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof CheckboxStyles> {}

export default function Checkbox({ name, id, style, ...rest }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className={CheckboxStyles({})}
      style={style}
      {...rest}
    />
  );
}
