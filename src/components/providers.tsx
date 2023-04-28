'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { LayoutProps } from '@/types';

export default function Providers({ children }: LayoutProps) {
  const [hasMounted, setHasMounted] = useState<boolean>(true);

  useEffect(() => setHasMounted(false), []);

  if (hasMounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
