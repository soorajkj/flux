"use client";

import Link from "next/link";
import { Button } from "~components/core/Button";
import { Icon } from "~components/core/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "~components/core/Avatar";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownShortcut,
  DropdownTrigger,
} from "~components/core/Dropdown";

export default function UserActions() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button asChild className="rounded-full">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-56">
        <div className="flex flex-col px-4 py-2">
          <h4 className="font-semibold text-color-base-600">Sooraj K J</h4>
          <p>{"soorajkj2001@gmail.com"}</p>
        </div>
        <DropdownSeparator />
        <DropdownItem asChild>
          <Link href="dashboard/profile">
            <div className="flex items-center space-x-2">
              <Icon icon="user" className="h-4 w-4" />
              <span>Profile</span>
            </div>
            <DropdownShortcut>P</DropdownShortcut>
          </Link>
        </DropdownItem>
        <DropdownItem asChild>
          <Link href="dashboard/settings">
            <div className="flex items-center space-x-2">
              <Icon icon="settings" className="h-4 w-4" />
              <span>Settings</span>
            </div>
            <DropdownShortcut>S</DropdownShortcut>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="zap" className="h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </div>
          <DropdownShortcut>P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="layers" className="h-4 w-4" />
            <span>Changelog</span>
          </div>
          <DropdownShortcut>S</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="support" className="h-4 w-4" />
            <span>Support</span>
          </div>
          <DropdownShortcut>P</DropdownShortcut>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="logout" className="h-4 w-4" />
            <span>Logout</span>
          </div>
          <DropdownShortcut>L</DropdownShortcut>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
