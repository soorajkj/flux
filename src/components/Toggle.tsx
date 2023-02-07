'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { VariantProps, cva } from 'class-variance-authority';

const ToggleStyles = cva(
  'inline-flex items-center justify-center rounded-md transition-colors data-[state=on]:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100'
);

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof ToggleStyles> {}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>((props, ref) => {
  const { className } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={ToggleStyles({ className })}
      {...props}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
