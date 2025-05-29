import { PrismaClient } from '@prisma/client';
import { Task } from '@/app/lib/models';

const prisma = new PrismaClient();

/**
 * 
 * @returns 
 */
export async function fetchTask(taskId: number): Promise<Task | null> {
  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId }
    });
    
    return task;
  } catch (error) {
    console.error('Prisma Error:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}