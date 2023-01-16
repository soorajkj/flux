import { ReactNode } from 'react';
import Navbar from '_components/navbar';
import Header from '_components/header';
import Footer from '_components/footer';
import Pane from '_components/pane';
import '_styles/tailwind.css';
import '_styles/app.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="midnight">
      <head />
      <body className="font-sans text-size-sm font-weight-normal leading-snug">
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex h-full w-full flex-row">
            <aside className="h-full w-auto">
              <Navbar />
            </aside>
            <Pane direction="vertical" />
            <div className="flex flex-1 flex-col">
              <Header />
              <Pane />
              <main className="flex-grow overflow-y-auto">{children}</main>
              <Pane />
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
