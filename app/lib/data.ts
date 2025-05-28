import { PrismaClient } from '@prisma/client';
import { ProjectTaskDTO } from '@/app/lib/dtos';

const prisma = new PrismaClient();

export async function fetchProjects(): Promise<ProjectTaskDTO[]> {
  try {
    const projects = await prisma.project.findMany({
      include: { tasks: true }
    });
    return projects
  } catch (error) {
    console.error('Prisma Error:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}