import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen flex-col justify-center">
      <div className="mx-auto flex w-full max-w-xs flex-col px-4 py-14">
        <div className="mx-auto">
          <div className="relative inline-flex h-10 w-10 cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg border border-color-grey-100 bg-color-grey-000">
            <span className="h-1/2 w-1/2 rounded-full bg-color-primary-500" />
            <span className="absolute left-0 bottom-0 right-0 h-1/2 blur-sm backdrop-blur-sm" />
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
