import { LayoutProps } from "~types/layout";
import { Separator } from "~components/core/separator";
import Footer from "~components/footer";
import Header from "~components/header";
import Routesbar from "~components/routesbar";

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Header />
      <Separator orientation="horizontal" />
      <div className="flex flex-1">
        <Routesbar />
        <Separator orientation="vertical" className="hidden lg:block" />
        <main className="flex-1">{props.children}</main>
      </div>
      <Separator orientation="horizontal" />
      <Footer />
    </div>
  );
}
