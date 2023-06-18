"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LayoutProps } from "~types/layout";
import { classnames } from "~utils/classnames";

const pannelStyles = cva("overflow-hidden", {
  variants: {
    orientation: {
      horizontal: "w-full h-auto",
      vertical: "w-auto h-full",
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
