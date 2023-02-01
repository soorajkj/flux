import * as React from 'react';
import Folder from '@/public/folder.svg';
import User from '@/public/user.svg';
import Settings from '@/public/settings.svg';
import Check from '@/public/check.svg';

const IconTypes = {
  folder: Folder,
  user: User,
  settings: Settings,
  check: Check,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof IconTypes;
}

const Icon = React.forwardRef<SVGElement, IconProps>(
  ({ icon, ...props }: IconProps, ref) => {
    const SVGElement = IconTypes[icon];

    return <SVGElement ref={ref} {...props} />;
  }
);

Icon.displayName = 'Icon';

export default Icon;
