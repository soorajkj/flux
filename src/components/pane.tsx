import { cva, VariantProps } from 'class-variance-authority';

const styles = cva('pointer-events-none inline-block bg-color-tertiary', {
  variants: {
    direction: {
      vertical: 'w-0.5 h-full',
      horizontal: 'h-0.5 w-full',
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
