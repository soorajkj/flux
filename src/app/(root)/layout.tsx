import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      {props.children}
    </div>
  );
}
