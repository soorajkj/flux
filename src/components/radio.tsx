import { cva, VariantProps } from 'class-variance-authority';

const RadioStyles = cva(['']);

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
