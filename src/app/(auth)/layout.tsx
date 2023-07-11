import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full max-w-sm flex-col px-4 py-14">
        {children}
      </div>
    </div>
  );
}
