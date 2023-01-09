export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-row">
        <aside className="h-full w-auto">Sidebar</aside>
        <div className="flex flex-1 flex-col">
          <header>Header</header>
          <main className="flex-grow overflow-y-auto">{children}</main>
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
}
