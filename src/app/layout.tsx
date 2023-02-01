import '_styles/tailwind.css';
import '_styles/app.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <div className="flex h-screen w-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
