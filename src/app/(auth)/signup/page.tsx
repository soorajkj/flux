import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import Separator from "~components/core/separator";
import Typography from "~components/core/typography";
import AuthProviders from "~components/_auth/auth-providers";
import SignupForm from "~components/_auth/signup-form";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) return redirect("/dashboard");

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <Typography.Title variant="5/semibold" className="text-center">
        Sign up
      </Typography.Title>
      <Typography.Text className="mb-12 text-center font-family-shantell-sans">
        Welcome back! Please enter your details.
      </Typography.Text>
      <SignupForm />
      <Separator>or</Separator>
      <AuthProviders />
    </div>
  );
}
