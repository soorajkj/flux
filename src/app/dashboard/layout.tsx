export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <main className="grow overflow-y-auto">{children}</main>
    </div>
  );
}
