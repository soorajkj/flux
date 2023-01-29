import Folder from 'public/folder.svg';

const IconTypes = {
  folder: Folder,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof IconTypes;
}

export default function Icon({ icon, ...props }: IconProps) {
  const IconElement = IconTypes[icon];

  return <IconElement {...props} />;
}
