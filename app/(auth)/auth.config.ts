import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/signin',
    newUser: '/home',
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith("/home");
      const isOnProfile = nextUrl.pathname.startsWith("/profile");
      const isOnSignUp = nextUrl.pathname.startsWith("/signup");
      const isOnSignIn = nextUrl.pathname.startsWith("/signin");

      if(isSignedIn && (isOnSignIn || isOnSignUp)) {
        return Response.redirect(new URL('/home', nextUrl as unknown as URL));
      }

      if(isOnSignUp || isOnSignIn) {
        return true;
      }
      
      if(isOnHome || isOnProfile) {
        if(isSignedIn) return true;
          return false;
      }
      if(isSignedIn) {
        return Response.redirect(new URL('/home', nextUrl as unknown as URL));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
