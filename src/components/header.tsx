import Separator from "~components/core/separator";

export default function Header() {
  return (
    <header className="tweede-header fixed left-0 right-0 top-0 z-40 flex h-16 w-full flex-col bg-white/50 backdrop-blur dark:bg-neutral-900/50">
      <div className="flex-1"></div>
      <Separator />
    </header>
  );
}
