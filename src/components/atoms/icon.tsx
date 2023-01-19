import Folder from 'public/folder.svg';

const iconTypes = {
  folder: Folder,
} as const;

type IconValues = (typeof iconTypes)[keyof typeof iconTypes];

interface Props
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: IconValues;
}

export default function Icon({ icon, ...rest }: Props) {
  const IconComp = iconTypes[icon];

  return <IconComp {...rest} />;
}
