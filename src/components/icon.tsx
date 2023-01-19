import Folder from 'public/folder.svg';

const iconTypes = {
  folder: Folder,
} as const;

interface Props {
  icon: keyof typeof iconTypes;
}

export default function Icon({ icon, ...rest }: Props) {
  const IconEle = iconTypes[icon];

  return <IconEle {...rest} />;
}
