import { cva, VariantProps } from 'class-variance-authority';

const styles = cva('ua-pane pointer-events-none', {
  variants: {
    direction: {
      vertical: 'w-px h-full',
      horizontal: 'h-px w-full',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});

interface Props extends VariantProps<typeof styles> {}

export default function Pane({ direction }: Props) {
  return <span className={styles({ direction })} />;
}
