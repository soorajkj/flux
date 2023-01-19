import { cva, VariantProps } from 'class-variance-authority';

const styles = cva(['pointer-events-none bg-color-tertiary-light'], {
  variants: {
    direction: {
      vertical: 'w-0.5 h-full',
      horizontal: 'w-full h-0.5',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});

interface Props extends VariantProps<typeof styles> {}

export default function Pane({ direction }: Props) {
  return <div className={styles({ direction })} />;
}
