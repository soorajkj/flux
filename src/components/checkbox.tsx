import { cva, VariantProps } from 'class-variance-authority';

const CheckboxStyles = cva(['']);

interface CheckboxProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof CheckboxStyles> {}

export default function Checkbox({
  name,
  id,
  className,
  style,
  ...rest
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className={CheckboxStyles({ className })}
      style={style}
      {...rest}
    />
  );
}
