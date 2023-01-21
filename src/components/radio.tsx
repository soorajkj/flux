import { cva, VariantProps } from 'class-variance-authority';

const RadioStyles = cva(
  ['cursor-pointer select-none focus:ring-0 focus:ring-offset-0'],
  {
    variants: {},
    defaultVariants: {},
  }
);

interface RadioProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof RadioStyles> {}

export default function Radio({ name, id, style, ...rest }: RadioProps) {
  return (
    <input
      type="radio"
      name={name}
      id={id}
      className={RadioStyles({})}
      style={style}
      {...rest}
    />
  );
}
