import Link from "next/link";
import Button from "~components/core/button";
import Separator from "~components/core/separator";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-zinc-50 text-zinc-700">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="flex items-center py-4">
          <Logo href={"/"} scroll={true} />
          <div className="hidden flex-1 justify-end gap-4 md:flex">
            <Button variant="ghots">Request a demo</Button>
            <Separator orientation="vertical" className="h-auto" />
            <Button variant="ghots" asChild>
              <Link href={"/signin"}>Log In</Link>
            </Button>
            <Button asChild>
              <Link href={"/signup"}>Try Tesseract free</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
