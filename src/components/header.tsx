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
          <div className="relative inline-flex h-8 w-8 cursor-pointer select-none items-center justify-center overflow-hidden rounded-lg border-2 border-color-neutral-200 bg-color-neutral-200/50 shadow-sm">
            <span className="h-4 w-4 rounded-full bg-color-primary-700"></span>
            <span className="absolute left-0 bottom-0 right-0 h-1/2 blur-sm backdrop-blur-sm"></span>
          </div>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <div className="mr-4 hidden items-center gap-x-2 md:flex">
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button className="px-2">
                    <Icon icon="search" width={16} height={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Search</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button className="px-2">
                    <Icon icon="maximize" width={16} height={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Zen Mode</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Button className="px-2">
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
