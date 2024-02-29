import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import SigninForm from "~components/_auth/signin-form";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) return redirect("/dashboard");

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <SigninForm />
    </div>
  );
}
