import { clsx, type ClassValue } from "clsx";
import { twMerge as merge } from "tailwind-merge";

export const cx = (..._arg: ClassValue[]) => merge(clsx(_arg));
