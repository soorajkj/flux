import { Separator } from "~components/core/Separator";
import Header from "~components/Header";
import Footer from "~components/Footer";
import Routesbar from "~components/Routesbar";
import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <Header />
        <Separator orientation="horizontal" />
        <div className="flex h-full w-full flex-1 flex-row overflow-y-auto">
          <Routesbar />
          <Separator orientation="vertical" className="h-auto" />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
        <Separator orientation="horizontal" />
        <Footer />
      </div>
    </div>
  );
}
