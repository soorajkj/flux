import '_styles/tailwind.css';
import '_styles/app.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="h-screen w-screen overflow-hidden">
          <div className="flex h-full w-full flex-row">
            <aside className="h-full w-auto">Sidebar</aside>
            <div className="flex flex-1 flex-col">
              <header>Header</header>
              <main className="flex-grow overflow-y-auto">{children}</main>
              <footer>Footer</footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
