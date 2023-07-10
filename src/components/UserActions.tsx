import { Avatar, AvatarFallback, AvatarImage } from "~components/core/Avatar";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownShortcut,
  DropdownTrigger,
} from "~components/core/Dropdown";
import { Button } from "~components/core/Button";
import { Icon } from "~components/core/Icon";

export default function UserActions() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button className="rounded-full px-0 py-0" asChild>
          <Avatar>
            <AvatarImage src="" alt="Olivia Rhye" />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-56">
        <div className="flex flex-col px-4 py-2">
          <DropdownLabel>Olivia Rhye</DropdownLabel>
          <div>olivia@untitledui.com</div>
        </div>
        <DropdownSeparator />
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="user" className="h-4 w-4" />
            <span>Profile</span>
          </div>
          <DropdownShortcut>⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="settings" className="h-4 w-4" />
            <span>Settings</span>
          </div>
          <DropdownShortcut>⌘S</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="zap" className="h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </div>
          <DropdownShortcut>⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="layers" className="h-4 w-4" />
            <span>Changelog</span>
          </div>
          <DropdownShortcut>⌘S</DropdownShortcut>
        </DropdownItem>
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="support" className="h-4 w-4" />
            <span>Support</span>
          </div>
          <DropdownShortcut>⌘P</DropdownShortcut>
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>
          <div className="flex items-center space-x-2">
            <Icon icon="logout" className="h-4 w-4" />
            <span>Logout</span>
          </div>
          <DropdownShortcut>⌘L</DropdownShortcut>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
