import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import Separator from "~components/core/separator";
import AuthProviders from "~components/_auth/auth-providers";
import SigninForm from "~components/_auth/signin-form";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (data.session) return redirect("/dashboard");

  return (
    <div className="mx-auto w-full max-w-96 space-y-6">
      <div className="mb-8 text-center">
        <h2 className="font-family-caprasimo text-2xl uppercase text-zinc-900">
          Sign In
        </h2>
        <div className="mt-4 rounded-md border border-red-200 bg-red-100 px-4 py-4 text-red-500">
          <p>
            Signin authentication with email and password is temporarily
            unavailable. Please try again later, or sign in using Google or
            Github.
          </p>
        </div>
      </div>
      <AuthProviders />
      <Separator />
      <SigninForm />
    </div>
  );
}
