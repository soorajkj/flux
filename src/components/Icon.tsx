import { forwardRef } from 'react';
import Plus from 'public/plus.svg';
import Minus from 'public/minus.svg';
import Maximize from 'public/maximize.svg';

const Icons = {
  plus: Plus,
  minus: Minus,
  maximize: Maximize,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
}

const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
  const { icon, ...rest } = props;

  const SVGElement = Icons[icon];
  return <SVGElement ref={ref} {...rest} />;
});

Icon.displayName = 'Icon';

export default Icon;
