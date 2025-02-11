import { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: "/signin",
    newUser: "/home",
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
        return Response.redirect(new URL("/home", nextUrl));
      }

      if(isOnProfile) {
        if(auth?.user?.email == "tu@gmail.com") return true;
        return false;
      }

      if(isOnSignUp || isOnSignIn) {
        return true;
      }

      if(isOnHome) {
        if(isSignedIn) return true;
          return false;
      }

      if(isOnProfile) {
        if(isSignedIn) return true;
          return false;
      }

      if(isSignedIn) {
        return Response.redirect(new URL("/home", nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
