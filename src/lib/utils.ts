import { clsx, type ClassValue as values } from "clsx";
import * as tw from "tailwind-merge";

// merge tailwind classNames
export const classnames = (...classNames: values[]) => {
  return tw.twMerge(clsx(classNames));
};
