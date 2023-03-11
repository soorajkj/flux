export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return <div className="h-screen w-screen  overflow-hidden">{children}</div>;
}
