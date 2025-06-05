import { prisma } from '@/app/lib/prisma';
import { User } from '@/app/lib/types';

/**
 * Retrieves a specific user record.
 * @returns - User object or null if username not found.
 */
export async function fetchUser(username: string): Promise<User | null> {
  console.log("in fetchUser()");
  try {
    const user = await prisma.user.findFirst({
      where: { username }
    });
    return user;
  } catch (error) {
    console.error('Prisma Error:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}