"use client";

import { SessionProvider } from "next-auth/react";
import { LayoutProps } from "@/types/layout";

export const NextAuthProvider = (props: LayoutProps) => {
  const { children } = props;
  return <SessionProvider>{children}</SessionProvider>;
};
