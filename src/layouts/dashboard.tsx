import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode, useState } from 'react';

const sidebarStyles = cva(
  'fixed top-0 h-full transition ease-in-out duration-300 lg:static z-50',
  {
    variants: {
      open: {
        true: 'left-0',
        false: '-left-full',
      },
    },
  }
);

interface DashboardLayoutProps extends VariantProps<typeof sidebarStyles> {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-row">
        <aside className={sidebarStyles({ open })}>
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
