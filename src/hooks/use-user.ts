import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "~lib/supabase/client";

export default function useUser() {
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | {}>({});

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };

    getUser();
  }, [supabase]);

  return { user, loading };
}
