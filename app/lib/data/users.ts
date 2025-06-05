import { PrismaClient } from '@prisma/client';
import { User } from '@/app/lib/types';

const prisma = new PrismaClient();

/**
 * 
 * @returns 
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