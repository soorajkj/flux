export { default } from 'next-auth/middleware';

// matcher url's are protected
// if session there is no session redirects to the root layout
export const config = { matcher: ['/dashboard/:path*'] };
