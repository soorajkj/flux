import { LayoutProps } from '@/types/layout';
import Separator from '@/components/separator';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <Header />
        <Separator />
        <div className="flex flex-1 flex-row overflow-y-auto">
          <Navbar />
          <Separator orientation="vertical" />
          <main className="flex-1">{children}</main>
        </div>
        <Separator />
        <Footer />
      </div>
    </div>
  );
}
