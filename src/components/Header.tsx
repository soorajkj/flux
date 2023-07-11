import UserActions from "~components/UserActions";
import HeaderActions from "~components/HeaderActions";

export default function Header() {
  return (
    <header className="h-auto w-full overflow-hidden">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <div className="relative inline-flex h-10 w-10 cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg border border-color-grey-100 bg-color-grey-000">
          <span className="h-1/2 w-1/2 rounded-full bg-color-primary-500" />
          <span className="absolute left-0 bottom-0 right-0 h-1/2 blur-sm backdrop-blur-sm" />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <HeaderActions />
          <UserActions />
        </div>
      </div>
    </header>
  );
}
