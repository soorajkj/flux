import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  return (
    <div className="h-screen w-full overflow-hidden">{props.children}</div>
  );
}
