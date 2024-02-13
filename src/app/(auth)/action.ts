"use server";

import { cookies } from "next/headers";
import { createClient } from "~lib/supabase/action-client";
import { SigninFormFields } from "~components/_auth/signin-form";
import { SignupFormFields } from "~components/_auth/signup-form";

export const handleSigninFormSubmit = async (data: SigninFormFields) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const res = await supabase.auth.signInWithPassword({
    email: data.email as string,
    password: data.password as string,
  });

  return JSON.stringify(res);
};

export const handleSignupFormSubmit = async (data: SignupFormFields) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const res = await supabase.auth.signUp({
    email: data.email as string,
    password: data.password as string,
  });

  return JSON.stringify(res);
};
