'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva } from 'class-variance-authority';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return <RadioGroupPrimitive.Root ref={ref} className={className} {...rest} />;
});

const RadioGroupItemStyles = cva(
  'text:fill-slate-50 peer h-4 w-4 rounded-full border-2 border-color-tertiary text-color-secondary transition-colors focus:outline-none focus:ring-offset-0 disabled:cursor-default disabled:opacity-50 data-[state=checked]:border-color-accent'
);

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={RadioGroupItemStyles({ className })}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <span className="pointer-events-none inline-block h-2 w-2 rounded-full bg-color-accent" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export default RadioGroup;
export { RadioGroupItem };
