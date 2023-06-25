"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LayoutProps } from "~types/layout";
import { classnames } from "~lib/utlis";

const pannelStyles = cva("overflow-hidden", {
  variants: {
    orientation: {
      horizontal: "h-auto w-full",
      vertical: "h-full w-auto",
    },
  },
});

interface PannelProps extends LayoutProps, VariantProps<typeof pannelStyles> {
  className?: string;
}

const Pannel = (props: PannelProps) => {
  const { orientation = "horizontal", children, className } = props;

  return (
    <div className={classnames(pannelStyles({ orientation, className }))}>
      {children}
    </div>
  );
};

export { Pannel };
