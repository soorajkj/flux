import { LayoutProps } from '@/types/layout';
import Separator from '@/components/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <Header />
        <Separator orientation="horizontal" />
        <main className="h-full w-full overflow-y-auto">
          <div className="container">{children}</div>
        </main>
        <Separator orientation="horizontal" />
        <Footer />
      </div>
    </div>
  );
}
