import { Inter } from 'next/font/google';

const interFont = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const inter = interFont.variable;
