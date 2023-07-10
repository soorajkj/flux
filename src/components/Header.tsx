import UserActions from "~components/UserActions";
import HeaderActions from "~components/HeaderActions";

export default function Header() {
  return (
    <header className="h-auto w-full overflow-hidden">
      <div className="flex h-14 w-full items-center justify-end px-4">
        <div className="flex items-center space-x-6">
          <HeaderActions />
          <UserActions />
        </div>
      </div>
    </header>
  );
}
