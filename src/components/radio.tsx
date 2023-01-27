import { cva, VariantProps } from 'class-variance-authority';

const RadioStyles = cva([
  'radio appearance-none relative inline-block mx-1 my-1 w-4 h-4 bg-color-primary border border-color-tertiary-dark rounded-full cursor-pointer select-none outline-none after:absolute after:top-1/2 after:left-1/2 after:w-2 after:h-2 after:bg-color-tertiary after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:transition checked:bg-color-accent checked:border-color-accent checked:after:scale-100 checked:after:bg-color-primary disabled:pointer-events-none disabled:opacity-50 disabled:bg-color-primary-dark disabled:checked:bg-color-accent',
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
