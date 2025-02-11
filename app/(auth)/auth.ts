import { compare } from 'bcrypt-ts';
import NextAuth, { User, Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { getUser } from '@/app/lib/data';
import { authConfig } from '@/app/(auth)/auth.config';

interface ExtendedSession extends Session {
  user: User;
}

declare module "next-auth" {
  interface User {
    user_id?: string | null;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {},
      async authorize({ email, password }: any) {
        if(email !== "tu@gmail.com") {
          const users = await getUser(email);
          if(users.length === 0) return null;
          const passwordsMatch = await compare(password, users[0].password!);
          if(passwordsMatch) return users[0] as any;
        } else {
          const managers = await getUser(email);
          if(managers.length === 0) return null;
          const passwordsManagerMatch = await compare(password, managers[0].password!);
          if(passwordsManagerMatch) return managers[0] as any;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(user) {
        token.id = user.user_id;
      }

      return token;
    },
    async session({
      session, token,
    }: {
      session: ExtendedSession;
      token: any;
    }) {
      if(session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
