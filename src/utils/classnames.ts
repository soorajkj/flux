import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classnames = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
