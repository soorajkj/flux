"use client";

import * as React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import Search from "public/search.svg";
import Download from "public/download.svg";
import Maximize from "public/maximize.svg";
import Check from "public/check.svg";
import Show from "public/show.svg";
import Hide from "public/hide.svg";
import ChevronRight from "public/chevron-right.svg";
import User from "public/user.svg";
import Settings from "public/settings.svg";
import Logout from "public/logout.svg";
import Zap from "public/zap.svg";
import Layers from "public/layers.svg";
import Support from "public/support.svg";

const Icons = {
  search: Search,
  download: Download,
  maximize: Maximize,
  check: Check,
  show: Show,
  hide: Hide,
  chevronRight: ChevronRight,
  user: User,
  settings: Settings,
  logout: Logout,
  zap: Zap,
  layers: Layers,
  support: Support,
} as const;

interface IconProps
  extends React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement> {
  icon: keyof typeof Icons;
  label?: string;
}

const Icon = React.forwardRef<SVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;

  const Component = Icons[icon];

  return (
    <React.Fragment>
      <Component ref={ref} aria-hidden={true} focusable={false} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
});

Icon.displayName = "Icon";

export { Icon };
