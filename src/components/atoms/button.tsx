import { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  [
    'relative inline-flex justify-center items-center border border-color-transparent rounded cursor-pointer select-none truncate py-2 px-4 bg-color-accent text-color-accent-contrast transition-all overflow-hidden hover:bg-color-accent-light focus:bg-color-accent-dark',
  ],
  {
    variants: {
      block: {
        true: 'w-full',
      },
      loading: {
        true: 'cursor-auto',
      },
    },
    defaultVariants: {},
  }
);

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes,
    VariantProps<typeof ButtonStyles> {
  loading?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

function Loader() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-t-color-transparent" />
  );
}

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    type = 'button',
    block,
    loading,
    className,
    style,
    ...rest
  }: ButtonProps,
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={ButtonStyles({ block, loading, className })}
      style={style}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </button>
  );
});
