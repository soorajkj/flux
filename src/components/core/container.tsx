import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ContainerStyles> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cx(ContainerStyles({ className }))} {...rest}>
      {children}
    </div>
  );
}

const ContainerStyles = cva([
  "container",
  "mx-auto",
  "w-full",
  "max-w-7xl",
  "px-4",
]);
