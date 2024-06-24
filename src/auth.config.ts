import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import google from "next-auth/providers/google";

export default {
  providers: [GitHub, google],
} satisfies NextAuthConfig;
