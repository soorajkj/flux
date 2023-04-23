import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Splitter from '@/components/Splitter';
import { LayoutProps } from '@/types/layout';

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Header />
      <Splitter />
      <div className="flex-1">{children}</div>
      <Splitter />
      <Footer />
    </div>
  );
}
