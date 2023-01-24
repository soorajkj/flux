import { cva, VariantProps } from 'class-variance-authority';

const RadioStyles = cva([
  'appearance-none relative inline-block w-4 h-4 rounded-full border-2 border-color-tertiary cursor-pointer select-none bg-color-primary hover:border-color-tertiary-dark after:absolute after:left-1/2 after:top-1/2 after:w-0 after:h-0 after:rounded-full after:border-4 after:border-color-accent after:scale-0 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all checked:border-color-accent checked:after:scale-100 checked:hover:border-color-accent disabled:cursor-auto',
]);

interface RadioProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof RadioStyles> {}

export default function Radio({
  name,
  id,
  className,
  style,
  ...rest
}: RadioProps) {
  return (
    <input
      type="radio"
      name={name}
      id={id}
      className={RadioStyles({ className })}
      style={style}
      {...rest}
    />
  );
}
