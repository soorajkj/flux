'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export default function ThemeProvider({
  children,
  ...rest
}: ThemeProviderProps) {
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
}
