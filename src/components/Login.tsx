'use client';

import { useSupabase } from '@/components/SupabaseProvider';

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  const handleGitHubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      throw error;
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <button onClick={handleGitHubLogin}>GitHub Login</button>
  );
}
