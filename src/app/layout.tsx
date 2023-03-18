import { LayoutProps } from '@/types/layout';
import '@/styles/tailwind.css';

export default function AppLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="mx-4 my-4 h-full rounded-md bg-zinc-800/30 px-4 py-4 backdrop-blur">
          {children}
        </div>
      </body>
    </html>
  );
}
