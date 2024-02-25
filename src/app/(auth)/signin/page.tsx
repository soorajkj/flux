import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import Separator from "~components/core/separator";
import Typography from "~components/core/typography";
import AuthProviders from "~components/_auth/auth-providers";
import SigninForm from "~components/_auth/signin-form";

export default async function Page() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) return redirect("/dashboard");

  return (
    <div className="mx-auto w-full max-w-sm">
      <Typography.Title variant="5/semibold" className="text-center">
        Log in to your account
      </Typography.Title>
      <Typography.Text className="mb-12 text-center font-family-shantell-sans">
        Welcome back! Please enter your details.
      </Typography.Text>
      <SigninForm />
      <Separator>or</Separator>
      <AuthProviders />
      <p className="mt-8 text-center">Don&apos;t have an account? Sign up</p>
    </div>
  );
}
