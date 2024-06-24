"use client";

import * as React from "react";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";

export default function SessionProvider(props: { children: React.ReactNode }) {
  const { children } = props;

  return <AuthSessionProvider>{children}</AuthSessionProvider>;
}
