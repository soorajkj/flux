'use client';

import { forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';

const SplitterStyles = cva(
  'inline-block pointer-events-none bg-color-grey-200',
  {
    variants: {
      orientation: {
        vertical: 'w-px h-full',
        horizontal: 'h-px w-full',
      },
    },
  }
);

interface SplitterProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof SplitterStyles> {}

const Splitter = forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SplitterProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...rest },
    ref
  ) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={SplitterStyles({ orientation, className })}
        {...rest}
      />
    );
  }
);

Splitter.displayName = 'Splitter';

export default Splitter;
