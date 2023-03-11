'use client';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--family-inter',
  display: 'swap',
});

export default function Fonts() {
  return (
    <>
      <style jsx global>{`
				:root {
					--family-inter: ${inter.style.fontFamily};
				}
			}`}</style>
    </>
  );
}
