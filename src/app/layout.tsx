import 'server-only';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import SupabaseProvider from '@/components/supabase-provider';
import SupabaseListener from '@/components/supabase-listener';
import { createServerClient } from '@/lib/server';
import { LayoutProps } from '@/types/layout';
import { inter } from '@/lib/fonts';
import '@/styles/tailwind.css';
import '@/styles/app.css';

export type TypedSupabaseClient = SupabaseClient;
export const revalidate = 0;

export default async function AppLayout(props: LayoutProps) {
  const { children } = props;
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <SupabaseProvider session={session}>
          <SupabaseListener token={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
