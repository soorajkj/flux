import Folder from 'public/folder.svg';
import User from 'public/user.svg';
import Settings from 'public/settings.svg';
import Check from 'public/check.svg';

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

export default function Icon({ icon, ...props }: IconProps) {
  const IconElement = IconTypes[icon];

  return <IconElement {...props} />;
}
