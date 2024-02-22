import Link from "next/link";
import Button from "~components/core/button";
import Separator from "~components/core/separator";
import Logo from "~components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-900/60 backdrop-blur-md">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="flex items-center py-4">
          <Logo href={"/"} scroll={true} />
          <p className="ml-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="hidden flex-1 justify-end gap-4 md:flex">
            <Button variant="ghots">Request a demo</Button>
            <Separator orientation="vertical" className="h-auto" />
            <Button variant="primary" asChild>
              <Link href={"/signin"}>Login to your account</Link>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </header>
  );
}
