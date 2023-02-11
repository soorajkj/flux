'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';

const SwitchStyles = cva(
  'peer inline-flex h-4 w-6 shrink-0 cursor-pointer items-center rounded-full bg-color-transparent border-2 border-color-tertiary transition-colors focus:outline-none disabled:cursor-default disabled:opacity-50 data-[state=unchecked]:bg-color-primary data-[state=checked]:border-color-accent'
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof SwitchStyles> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <SwitchPrimitives.Root
      ref={ref}
      className={SwitchStyles({ className })}
      {...rest}
    >
      <SwitchPrimitives.Thumb className="pointer-events-none inline-block h-2 w-2 rounded-full bg-color-secondary-light shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-3 data-[state=checked]:bg-color-accent" />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
