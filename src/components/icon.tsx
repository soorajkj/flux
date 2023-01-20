import Folder from 'public/folder.svg';

const iconTypes = {
  folder: Folder,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof iconTypes;
}

export default function Icon({ icon, ...rest }: IconProps) {
  const IconEle = iconTypes[icon];

  return <IconEle {...rest} />;
}
