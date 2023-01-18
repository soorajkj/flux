import { ReactNode } from 'react';
import Pane from '_components/atoms/pane';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-accent="purple">
      <head />
      <body>
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex h-full w-full flex-row">
            <aside className="relative h-full w-auto">
              <nav className="h-full w-64"></nav>
            </aside>
            <Pane direction="vertical" />
            <div className="flex flex-1 flex-col">
              <div className="h-auto w-full">
                <header className="h-14 w-full"></header>
              </div>
              <Pane direction="horizontal" />
              <main className="flex-grow overflow-y-auto">{children}</main>
              <Pane direction="horizontal" />
              <div className="h-auto w-full">
                <footer className="h-7 w-full"></footer>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
