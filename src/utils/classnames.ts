import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export const classnames = (...classnames: ClassValue[]) => {
  return twMerge(clsx(classnames));
};
