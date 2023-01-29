import '_styles/tailwind.css';
import '_styles/app.css';
import Separator from '_components/core/separator';
import Sidemenu from '_components/sidemenu';
import Header from '_components/header';
import Footer from '_components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <div className="flex h-screen w-screen overflow-hidden">
          <aside className="h-full w-auto">
            <Sidemenu />
          </aside>
          <Separator orientation="vertical" />
          <div className="flex h-full w-full flex-col">
            <div className="h-auto w-full">
              <Header />
            </div>
            <Separator />
            <main className="flex-grow overflow-y-auto">{children}</main>
            <Separator />
            <div className="h-auto w-full">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
