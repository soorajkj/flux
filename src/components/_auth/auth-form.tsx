"use client";

import { signIn } from "next-auth/react";
import Button from "@/components/core/button";

export default function AuthForm() {
  return (
    <div className="mx-auto flex w-full max-w-96 flex-col gap-4">
      {["google", "github"].map((pro, i) => (
        <Button key={i} onClick={() => signIn(pro, { redirect: true })}>
          {pro}
        </Button>
      ))}
    </div>
  );
}
