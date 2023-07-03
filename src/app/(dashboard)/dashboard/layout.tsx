import { Separator } from "~components/core/separator";
import Header from "~components/header";
import Footer from "~components/footer";
import Routesbar from "~components/routesbar";
import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <Separator orientation="horizontal" />
      <div className="flex h-full w-full flex-1 flex-row">
        <Routesbar />
        <Separator orientation="vertical" className="h-auto" />
        <main className="flex-1">{children}</main>
      </div>
      <Separator orientation="horizontal" />
      <Footer />
    </div>
  );
}
