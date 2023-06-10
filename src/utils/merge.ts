import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const merge = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
