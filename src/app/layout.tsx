import 'server-only';
import '@/styles/tailwind.css';
import '@/styles/app.css';
import { createServerClient } from '@/libs/supabase-server';
import type { Database } from '@/types/database';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import SupabaseListener from '@/components/SupabaseListener';
import SupabaseProvider from '@/components/SupabaseProvider';
import Separator from '@/components/Separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Login from '@/components/Login';

export type TypedSupabaseClient = SupabaseClient<Database>;

export const revalidate = 0;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Login />
          <div className="flex h-screen w-screen overflow-hidden">
            <aside className="h-full w-auto">
              <Navbar />
            </aside>
            <Separator orientation="vertical" />
            <div className="flex h-full w-full flex-col">
              <div className="h-auto w-full">
                <Header />
              </div>
              <Separator orientation="horizontal" />
              <main className="flex-1 overflow-y-auto">{children}</main>
              <Separator orientation="horizontal" />
              <div className="h-auto w-full">
                <Footer />
              </div>
            </div>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
