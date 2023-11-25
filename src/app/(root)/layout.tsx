import { LayoutProps } from "~types/layout";
import Footer from "~components/landing/footer";
import Header from "~components/landing/header";

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="container mx-auto mt-16 flex-1 px-4">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
