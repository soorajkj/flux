import { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const styles = cva(
  'px-6 py-2 select-none cursor-pointer rounded border border-color-transparent relative inline-flex transition justify-center items-center',
  {
    variants: {
      variant: {
        primary:
          'bg-color-accent-dark text-color-accent-contrast hover:text-color-secondary-dark hover:bg-color-accent focus-visible:text-color-secondary-dark focus-visible:bg-color-accent',
        secondary:
          'bg-color-primary-light text-color-secondary hover:text-color-secondary-dark hover:bg-color-primary-dark focus-visible:text-color-secondary-dark focus-visible:bg-color-primary-dark',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface Props
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes,
    VariantProps<typeof styles> {}

export default function Button({
  children,
  type = 'button',
  variant,
  className,
  style,
  block,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={styles({ variant, block, className })}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
