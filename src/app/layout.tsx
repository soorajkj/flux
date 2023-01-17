import { ReactNode } from 'react';
import Navbar from '_components/navbar';
import Header from '_components/header';
import Footer from '_components/footer';
import Pane from '_components/pane';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="invert" data-accent="purple">
      <head />
      <body>
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex h-full w-full flex-row">
            <aside className="h-full w-auto">
              <Navbar />
            </aside>
            <Pane direction="vertical" />
            <div className="flex flex-1 flex-col">
              <div className="h-auto w-full">
                <Header />
              </div>
              <Pane />
              <main className="flex-grow overflow-y-auto">{children}</main>
              <Pane />
              <div className="h-auto w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
