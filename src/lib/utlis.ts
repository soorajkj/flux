import { User } from "@supabase/supabase-js";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classnames = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};

export const getAvatarName = (user: User) => {
  return user?.email.slice(0, 2).toUpperCase();
};
