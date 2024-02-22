import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data.session) return redirect("/");

  return <div></div>;
}
