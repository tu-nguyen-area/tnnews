import NextAuth from 'next-auth';

import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/", "/home", "/home/:id", "/api/:path*", "/signin", "/signup"],
};
