'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';

const SwitchStyles = cva(
  'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-color-transparent border-2 border-color-tertiary transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-color-primary'
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
      <SwitchPrimitives.Thumb className="pointer-events-none block h-4 w-4 rounded-full bg-color-secondary-light shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-4 data-[state=checked]:bg-color-accent" />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
