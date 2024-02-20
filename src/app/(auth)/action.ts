"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "~lib/supabase/server";
import { SigninFormFields } from "~components/_auth/signin-form";
import { SignupFormFields } from "~components/_auth/signup-form";

export const handleSignupFormSubmit = async (formData: SignupFormFields) => {
  const supabase = createClient();
  const origin = headers().get("origin");
  const email = formData.email as string;
  const password = formData.password as string;

  const res = await supabase.auth.signUp({
    options: { emailRedirectTo: `${origin}/auth/callback` },
    email,
    password,
  });

  return JSON.stringify(res);
};

export const handleSigninFormSubmit = async (formData: SigninFormFields) => {
  const supabase = createClient();
  const email = formData.email as string;
  const password = formData.password as string;

  const res = await supabase.auth.signInWithPassword({ email, password });
  if (!res.error) return redirect("/dashboard");
  return JSON.stringify(res);
};

export const handleSignout = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) return JSON.stringify(error);
  redirect("/");
};
