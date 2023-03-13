'use client';

import { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, VariantProps } from 'class-variance-authority';

const LabelStyles = cva(
  'text-sm leading-none peer-disabled:cursor-default peer-disabled:opacity-70'
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof LabelStyles> {}

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...rest }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={LabelStyles({ className })}
      {...rest}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
