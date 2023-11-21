import { LayoutProps } from "~types/layout";

export default function Layout(_props: LayoutProps) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      {_props.children}
    </div>
  );
}
