import { LayoutProps } from "~types/layout";
import { Pannel } from "~components/core/pannel";
import { Splitter } from "~components/core/splitter";
import Header from "~components/header";
import Routesbar from "~components/routesbar";
import Footer from "~components/footer";

interface DashboardLayoutProps extends LayoutProps {}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Pannel orientation="horizontal">
        <Header />
      </Pannel>
      <Splitter orientation="horizontal" />
      <div className="flex flex-1 flex-row">
        <Pannel orientation="vertical" className="h-auto overflow-y-auto">
          <Routesbar />
        </Pannel>
        <Splitter orientation="vertical" className="h-auto" />
        <main className="flex-1">{children}</main>
      </div>
      <Splitter orientation="horizontal" />
      <Pannel orientation="horizontal">
        <Footer />
      </Pannel>
    </div>
  );
}
