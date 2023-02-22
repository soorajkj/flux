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
        <div className="h-auto w-full">
          <Header />
        </div>
        <Separator />
        <div className="flex h-full w-full overflow-y-auto">
          <Routesbar />
          <Separator orientation="vertical" />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
        <Separator />
        <div className="h-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
