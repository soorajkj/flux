"use client";

import * as React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import Heart from "public/heart.svg";
import Loading from "public/loading.svg";
import Search from "public/search.svg";
import Download from "public/download.svg";

const Icons = {
  heart: Heart,
  loading: Loading,
  search: Search,
  download: Download,
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
