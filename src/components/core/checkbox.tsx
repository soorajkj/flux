'use client';

import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';

const CheckboxStyles = cva(
  'relative inline-flex h-4 w-4 cursor-pointer select-none items-center justify-center overflow-hidden rounded-sm border disabled:cursor-auto disabled:opacity-50'
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof CheckboxStyles> {}

export default forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(function Checkbox({ className, ...props }, ref) {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={CheckboxStyles({ className })}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="absolute left-1/2 top-1/2 block h-2 w-1 -translate-x-1/2 -translate-y-2/3 rotate-45 border-b border-r" />
    </CheckboxPrimitive.Root>
  );
});
