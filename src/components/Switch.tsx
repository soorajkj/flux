'use client';

import { forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';

const SwitchStyles = cva(
  'peer inline-flex h-4 w-6 shrink-0 cursor-pointer items-center rounded-full bg-color-transparent border-2 border-color-tertiary transition-colors focus:outline-none disabled:cursor-default disabled:opacity-50 data-[state=unchecked]:bg-color-primary data-[state=checked]:border-color-accent'
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof SwitchStyles> {}

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...rest }, ref) => {
  return (
    <SwitchPrimitives.Root
      ref={ref}
      className={SwitchStyles({ className })}
      {...rest}
    >
      <SwitchPrimitives.Thumb className="bg-color-secondary-light data-[state=checked]:bg-color-accent pointer-events-none inline-block h-2 w-2 rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-3" />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
