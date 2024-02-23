import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import Separator from "~components/core/separator";
import AuthProviders from "~components/_auth/auth-providers";
import SignupForm from "~components/_auth/signup-form";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) return redirect("/dashboard");

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <h2 className="!mb-14 text-center font-family-inter text-2xl font-semibold text-neutral-900">
        Sign Up
      </h2>
      <SignupForm />
      <Separator>or</Separator>
      <AuthProviders />
    </div>
  );
}
