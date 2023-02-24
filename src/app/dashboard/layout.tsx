import { LayoutProps } from '@/types/layout';

export default function DashboardLayout(props: LayoutProps) {
  const { children } = props;

  return <div className="h-screen w-screen overflow-hidden">{children}</div>;
}
