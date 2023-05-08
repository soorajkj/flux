import { inter } from '@/libs/fonts';
import { clsx } from '@/libs/utils';
import { LayoutProps } from '@/types/layout';
import '@/app/styles.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(`
        ${inter.className}
        h-screen w-screen
        select-none overflow-hidden
        text-sm font-normal
        leading-snug antialiased
        dark:bg-zinc-900 dark:text-zinc-200`)}
      >
        <div className="flex h-full w-full flex-col">{children}</div>
      </body>
    </html>
  );
}
