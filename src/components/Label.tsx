'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, VariantProps } from 'class-variance-authority';

const LabelStyles = cva(
  'text-sm leading-none peer-disabled:cursor-default peer-disabled:opacity-70'
);

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof LabelStyles> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>((props, ref) => {
  const { className } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={LabelStyles({ className })}
      {...props}
    />
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
