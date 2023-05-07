'use client';

import { DetailedHTMLProps, forwardRef, SVGAttributes } from 'react';
import * as VisuallyHiddenPrimitive from '@radix-ui/react-visually-hidden';
import Heart from 'public/heart.svg';

const Icons = {
  heart: Heart,
} as const;

interface IconProps
  extends DetailedHTMLProps<SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
  label: string;
}

const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;

  const Component = Icons[icon];

  return (
    <>
      <Component ref={ref} aria-hidden={true} focusable={false} {...rest} />
      <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
    </>
  );
});

Icon.displayName = 'Icon';

export { Icon };
