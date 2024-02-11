import React from "react";
import Separator from "~components/core/separator";
import AuthProviders from "~components/_auth/auth-providers";
import SigninForm from "~components/_auth/signin-form";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-96 space-y-8">
      <h2 className="!mb-12 text-center text-4xl font-semibold text-zinc-900">
        Sign in
      </h2>
      <AuthProviders />
      <Separator />
      <SigninForm />
    </div>
  );
}
