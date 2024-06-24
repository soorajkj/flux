import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center">
      {props.children}
    </div>
  );
}
