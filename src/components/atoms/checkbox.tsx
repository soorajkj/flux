import { cva, VariantProps } from 'class-variance-authority';

const CheckboxStyles = cva([
  'appearance-none relative inline-block w-4 h-4 rounded-sm border-2 border-color-tertiary cursor-pointer select-none bg-color-primary hover:border-color-tertiary-dark after:absolute after:left-1/2 after:top-1/3 after:w-1 after:h-2 after:border-b-2 after:border-r-2 after:border-color-accent after:rotate-45 after:-translate-x-1/2 after:-translate-y-1/3 after:scale-0 after:transition-all checked:border-color-accent checked:after:scale-100 checked:hover:border-color-accent disabled:cursor-auto',
]);

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
