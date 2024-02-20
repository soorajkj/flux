import React, { Fragment } from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import Hero from "~components/_www/hero";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) return redirect("/dashboard");

  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
}
