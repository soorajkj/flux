"use client";

import * as React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Database } from "~types/database";
import { LayoutProps } from "~types/layout";

interface SupabaseProviderProps extends LayoutProps {}

export default function SupabaseProvider(props: SupabaseProviderProps) {
  const { children } = props;

  const [supabaseClient] = React.useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
