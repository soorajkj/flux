import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  return <div>{props.children}</div>;
}
