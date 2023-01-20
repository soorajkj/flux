import { cva, VariantProps } from 'class-variance-authority';

const PaneStyles = cva(['pointer-events-none bg-color-tertiary-light'], {
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

interface PaneProps extends VariantProps<typeof PaneStyles> {}

export default function Pane({ direction }: PaneProps) {
  return <div className={PaneStyles({ direction })} />;
}
