interface LayoutProps {
  id?: string;
  children: React.ReactNode;
}

export default function Layout({ id, children }: LayoutProps) {
  return (
    <div id={id} className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full">
        <div className="h-full w-auto">
          <aside>aside</aside>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="h-auto w-full">
            <header>header</header>
          </div>
          <main className="flex-1 overflow-y-auto">
            <div>{children}</div>
          </main>
          <div className="h-auto w-full">
            <footer>footer</footer>
          </div>
        </div>
      </div>
    </div>
  );
}
