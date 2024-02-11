import React, { Fragment } from "react";
import { LayoutProps } from "~types/layout";

export default function Layout({ children }: LayoutProps) {
  return <Fragment>{children}</Fragment>;
}
