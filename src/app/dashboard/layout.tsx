import { LayoutProps } from '@/types/layout';
import Separator from '@/components/separator';
import Header from '@/components/header';
import Routesbar from '@/components/routesbar';
import Footer from '@/components/footer';

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <Header />
        <Separator orientation="horizontal" />
        <main className="flex h-full w-full flex-1 overflow-y-auto">
          <Routesbar />
          <Separator orientation="vertical" />
          <div className="container">{children}</div>
        </main>
        <Separator orientation="horizontal" />
        <Footer />
      </div>
    </div>
  );
}
