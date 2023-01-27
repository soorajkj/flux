import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const CheckboxStyles = cva([
  'checkbox appearance-none relative inline-block mx-1 my-1 w-4 h-4 border border-color-tertiary-dark rounded cursor-pointer select-none outline-none after:absolute after:top-1/2 after:left-1/2 after:w-1 after:h-2 after:rotate-45 after:-translate-x-1/2 after:-translate-y-2/3 after:scale-0 after:transition checked:bg-color-accent checked:border-color-accent checked:after:border-color-accent-contrast checked:after:scale-100 disabled:pointer-events-none disabled:bg-color-tertiary-light disabled:opacity-50 disabled:checked:bg-color-accent disabled:checked:border-color-accent disabled:checked:after:border-color-accent-contrast',
]);

interface CheckboxProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes,
    VariantProps<typeof CheckboxStyles> {}

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { name, id, className, style, ...rest }: CheckboxProps,
  ref
) {
  return (
    <input
      ref={ref}
      type="checkbox"
      name={name}
      id={id}
      className={CheckboxStyles({ className })}
      style={style}
      {...rest}
    />
  );
});
