import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { fetchUser } from './app/lib/data/users';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {

        // validate credentials
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await fetchUser(username);

          if (!user)
            return null;

          // TODO: need to compare password with bcrypt

          return {
            id: user.id.toString(),
            username: user.username,
          };
        }
 
        return null;
      },
    }),
  ],
});