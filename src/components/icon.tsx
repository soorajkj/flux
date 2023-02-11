import * as React from 'react';
import Folder from 'public/folder.svg';
import User from 'public/user.svg';
import Settings from 'public/settings.svg';
import Check from 'public/check.svg';
import Menu from 'public/menu.svg';
import ArrowLeft from 'public/arrow-left.svg';
import ArrowRight from 'public/arrow-right.svg';

const Icons = {
  folder: Folder,
  user: User,
  settings: Settings,
  check: Check,
  menu: Menu,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
}

const Icon = React.forwardRef<SVGElement, IconProps>((props, ref) => {
  const { icon, ...rest } = props;

  const SVGElement = Icons[icon];
  return <SVGElement ref={ref} {...rest} />;
});

Icon.displayName = 'Icon';

export default Icon;
