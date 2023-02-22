import { LayoutProps } from '@/types/layout';

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return <div className="h-screen w-screen overflow-hidden">{children}</div>;
}
