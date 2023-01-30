'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const SeparatorStyles = cva('pointer-events-none dark:bg-neutral-800', {
  variants: {
    orientation: {
      vertical: 'h-full w-0.5',
      horizontal: 'h-0.5 w-full',
    },
  },
});

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof SeparatorStyles> {}

export default forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(function Separator(
  { className, orientation = 'horizontal', decorative = true, ...props },
  ref
) {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={SeparatorStyles({ orientation, className })}
      {...props}
    />
  );
});
