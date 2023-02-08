'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';
import Icon from '@/components/Icon';

const CheckboxStyles = cva(
  'peer inline-block h-4 w-4 shrink-0 rounded-sm border-2 border-color-tertiary transition-colors focus:outline-none disabled:cursor-default disabled:opacity-50 data-[state=checked]:bg-color-accent data-[state=checked]:text-color-primary data-[state=checked]:border-color-accent'
);

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof CheckboxStyles> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={CheckboxStyles({ className })}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Icon icon="check" strokeWidth={4} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
