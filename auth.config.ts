import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnMain = nextUrl.pathname.startsWith('/projects');

      if (isOnMain) {
        if (isLoggedIn) return true; // let them stay on main projects page
        return false; // otherwise, redirect back to login
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/projects', nextUrl));
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...(session.user || {}),
        id: token.id as string,
        name: token.name,
      }; return session;
    }

  },
  providers: []
} satisfies NextAuthConfig;