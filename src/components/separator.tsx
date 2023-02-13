'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';

const SeparatorStyles = cva(
  'inline-block pointer-events-none border-color-tertiary border-solid',
  {
    variants: {
      orientation: {
        vertical: 'border-x  h-full',
        horizontal: 'border-t w-full',
      },
    },
  }
);

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
