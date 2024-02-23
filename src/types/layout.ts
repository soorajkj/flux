import * as React from "react";
import { icons } from "~constants/icons";

export type LayoutProps = { children: React.ReactNode };

export interface Route {
  name: string;
  url: string;
  icon: keyof typeof icons;
}
