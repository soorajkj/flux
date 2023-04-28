import { forwardRef } from 'react';

const Icons = {
  demo: () => <svg>...</svg>,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
}

const Icon = forwardRef<SVGElement, IconProps>(({ icon, ...rest }, ref) => {
  const SVGElement = Icons[icon];

  if (!SVGElement) {
    return null;
  }

  return <SVGElement ref={ref} {...rest} />;
});

Icon.displayName = 'Icon';

export default Icon;
