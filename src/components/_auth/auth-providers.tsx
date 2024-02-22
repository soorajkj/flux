"use client";

import React from "react";
import { Provider } from "@supabase/supabase-js";
import { createClient } from "~lib/supabase/client";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

export default function AuthProviders() {
  const signinWithProviders = async (provider: Provider) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) return;
  };

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="secondary"
        className="space-x-2"
        fullWidth={true}
        onClick={() => signinWithProviders("google")}
      >
        <Icon icon="google" width={20} height={20} />
        <span>Continue with Google</span>
      </Button>
      <Button
        variant="secondary"
        className="space-x-2"
        fullWidth={true}
        onClick={() => signinWithProviders("github")}
      >
        <Icon icon="github" width={20} height={20} />
        <span>Continue with Github</span>
      </Button>
    </div>
  );
}
