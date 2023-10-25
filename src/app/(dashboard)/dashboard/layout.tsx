import { LayoutProps } from "~types/layout";
import { Separator } from "~components/core/separator";
import Footer from "~components/footer";
import Header from "~components/header";
import Routesbar from "~components/routesbar";

export default function Layout(_props: LayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Header></Header>
      <Separator orientation="horizontal"></Separator>
      <div className="flex flex-1 overflow-y-auto">
        <Routesbar></Routesbar>
        <Separator orientation="vertical" className="hidden lg:block" />
        <main className="flex-1 overflow-y-auto">{_props.children}</main>
      </div>
      <Separator orientation="horizontal"></Separator>
      <Footer></Footer>
    </div>
  );
}
