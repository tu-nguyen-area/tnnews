import NextAuth from 'next-auth';
import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/", "/home", "/profile", "/home/:id", "/profile/:id", "/api/:path*", "/signin", "/signup"],
};
