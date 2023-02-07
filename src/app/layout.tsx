import '@/styles/tailwind.css';
import '@/styles/app.css';
import Separator from '@/components/core/Separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className="flex h-screen w-screen overflow-hidden">
          <aside className="h-full w-auto">
            <Sidebar />
          </aside>
          <Separator orientation="vertical" />
          <div className="flex h-full w-full flex-col">
            <div className="h-auto w-full">
              <Header />
            </div>
            <Separator orientation="horizontal" />
            <main className="flex-1 overflow-y-auto">{children}</main>
            <Separator orientation="horizontal" />
            <div className="h-auto w-full">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
