import '@/styles/tailwind.css';
import '@/styles/app.css';
import Separator from '@/components/atoms/separator';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';
import Sidebar from '@/components/organisms/sidebar';

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
