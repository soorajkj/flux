import React from "react";
import Separator from "~components/core/separator";
import AuthProviders from "~components/_auth/auth-providers";
import SignupForm from "~components/_auth/signup-form";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-96 space-y-8">
      <h2 className="!mb-12 text-center text-4xl font-semibold text-zinc-900">
        Sign up
      </h2>
      <SignupForm />
      <Separator />
      <AuthProviders />
    </div>
  );
}
