import Footer from "@/components/site/footer";
import Header from "@/components/site/header";

export default async function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <Header />
      <main className="h-full w-full grow"></main>
      <Footer />
    </div>
  );
}
