'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/supabase-provider';

// this component handles refreshing server data when the user logs in or out
// this method avoids the need to pass a session down to child components
// in order to re-render when the user's session changes
// #elegant!
export default function SupabaseListener({ token }: { token?: string }) {
  const { supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== token) {
        // server and client are out of sync
        // reload the page to fetch fresh server data
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [token, router, supabase]);

  return null;
}
