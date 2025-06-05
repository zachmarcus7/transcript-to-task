import { PrismaClient } from '@prisma/client';
import { Task } from '@/app/lib/types';

const prisma = new PrismaClient();

/**
 * Retrieves a specific task.
 * @returns - Task object or null if not found.
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