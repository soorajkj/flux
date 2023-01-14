import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-row">
        <aside className="h-full w-auto">
          <nav>Navbar</nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="flex justify-between">Header</header>
          <main className="flex-grow overflow-y-auto">{children}</main>
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
}
