'use client';

import { ThemeProvider } from 'next-themes';
import { useMounted } from '@/hooks/use-mounted';
import { LayoutProps } from '@/types';

export default function Providers({ children }: LayoutProps) {
  const hasMounted = useMounted();

  if (hasMounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
