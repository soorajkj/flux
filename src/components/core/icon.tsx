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
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label: string;
}

// accessibility essentials
const accessibility = {
  'aria-hidden': true,
  focusable: false,
};

const Icon = forwardRef<SVGElement, IconProps>(
  ({ icon, label, ...rest }, ref) => {
    const SVGElement = Icons[icon];

    return (
      <>
        <SVGElement ref={ref} {...accessibility} {...rest} />
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      </>
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
