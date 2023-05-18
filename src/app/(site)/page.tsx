export default async function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <header className="sticky top-0 left-0 h-auto w-full">Header</header>
      <main className="h-full w-full grow"></main>
      <footer className="mt-auto">Footer</footer>
    </div>
  );
}
