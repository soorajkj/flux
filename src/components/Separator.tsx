'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';

const SeparatorStyles = cva('pointer-events-none bg-color-primary-light', {
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

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>((props, ref) => {
  const {
    className,
    orientation = 'horizontal',
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={SeparatorStyles({ orientation, className })}
      {...rest}
    />
  );
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
