import '@/styles/tailwind.css';
import '@/styles/app.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <div className="flex h-screen w-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
