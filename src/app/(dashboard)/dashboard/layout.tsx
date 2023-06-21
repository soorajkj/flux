import { LayoutProps } from "~types/layout";
import { Pannel } from "~components/core/pannel";
import { Separator } from "~components/core/separator";
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
      <Separator orientation="horizontal" />
      <div className="flex flex-1 flex-row">
        <Pannel orientation="vertical" className="h-auto overflow-y-auto">
          <Routesbar />
        </Pannel>
        <Separator orientation="vertical" className="h-auto" />
        <main className="flex-1">{children}</main>
      </div>
      <Separator orientation="horizontal" />
      <Pannel orientation="horizontal">
        <Footer />
      </Pannel>
    </div>
  );
}
