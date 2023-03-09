import Separator from '@/components/shared/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Routesbar from '@/components/routesbar';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div className="h-screen w-screen  overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <div className="h-auto w-full">
          <Header />
        </div>
        <Separator orientation="horizontal" />
        <div className="flex w-full flex-1 overflow-y-auto">
          <aside className="block h-full w-auto">
            <Routesbar />
          </aside>
          <Separator orientation="vertical" />
          <main className="w-full flex-1 overflow-y-auto">{children}</main>
        </div>
        <Separator orientation="horizontal" />
        <div className="h-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
