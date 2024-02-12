"use server";

import { redirect } from "next/navigation";
import { supabase } from "~lib/supabase/action-client";
import { SigninFormFields } from "~components/_auth/signin-form";
import { SignupFormFields } from "~components/_auth/signup-form";

export const handleSigninFormSubmit = async (data: SigninFormFields) => {
  const { data: _data, error } = await supabase.auth.signInWithPassword({
    email: data.email as string,
    password: data.password as string,
  });

  if (error) return;
  if (_data) redirect("/dashboard");
};

export const handleSignupFormSubmit = async (data: SignupFormFields) => {
  const { data: _data, error } = await supabase.auth.signUp({
    email: data.email as string,
    password: data.password as string,
  });

  if (error) return;
  if (_data) redirect("/signin");
};
