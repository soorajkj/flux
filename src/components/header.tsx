import Link from "next/link";
import { Button } from "~components/core/button";
import { Icon } from "~components/core/icon";
import { Avatar, AvatarFallback, AvatarImage } from "~components/core/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~components/core/tooltip";

export default function Header() {
  return (
    <header className="h-auto w-full">
      <div className="flex h-14 w-full items-center justify-between px-4">
        <Link href="dashboard">
          <div className="border-color-white relative inline-flex h-9 w-9 cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg border-2 bg-white shadow-sm">
            <span className="h-1/2 w-1/2 rounded-full bg-violet-800"></span>
            <span className="absolute left-0 bottom-0 right-0 h-1/2 blur-sm backdrop-blur-sm"></span>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <div className="mr-6 hidden items-center gap-x-2 md:flex">
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
                    <Icon icon="maximize" width={16} height={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Zen Mode</TooltipContent>
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
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>Sooraj Janardhanan</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
