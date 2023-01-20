import Folder from 'public/folder.svg';

const IconTypes = {
  folder: Folder,
  folders: Folder,
} as const;

interface Props
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof IconTypes;
}

export default function Icon({ icon, ...rest }: Props) {
  const IconEle = IconTypes[icon];

  return <IconEle {...rest} />;
}
