import Link from "next/link";
import { Button } from "~components/core/button";
import { Icon } from "~components/core/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~components/core/tooltip";

export default function Header() {
  return (
    <header className="h-auto w-full bg-color-primary">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <Link href="dashboard" className="select-none">
          <span className="sr-only">Daybook.io</span>
        </Link>
        <div className="hidden items-center gap-x-2 md:flex">
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Icon icon="search" width={16} height={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Search</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Button variant="ghost">
                  <Icon icon="download" width={16} height={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
