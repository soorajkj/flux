import { NextResponse } from "next/server";
import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req: any) {
  const { nextUrl } = req;
  const _auth = !!req.auth;
  if (nextUrl.pathname.startsWith("/api/auth")) {
    return null;
  }
  if (["/auth"].includes(nextUrl.pathname)) {
    if (_auth) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }
  if (!_auth && !["/"].includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth", nextUrl));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
