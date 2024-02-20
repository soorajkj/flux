import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import UserProfile from "~components/_dashboard/user-profile";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) return redirect("/");

  return (
    <div>
      <UserProfile />
    </div>
  );
}
