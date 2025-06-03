'use server';

import { PrismaClient } from '@prisma/client';
import { ProjectTaskDTO, Project } from '@/app/lib/types';

const prisma = new PrismaClient();

/**
 * 
 * @returns 
 */
export async function fetchProjects(active: boolean): Promise<ProjectTaskDTO[]> {
  try {
    const projects = await prisma.project.findMany({
      where: {
        archived: !active
      },
      include: {
        tasks: {
          orderBy: [
            { priority: 'asc' },
            { description: 'asc' }
          ]
        }
      },
      orderBy: [
        { priority: 'asc' }
      ]
    });
    return projects;
  } catch (error) {
    console.error('Prisma Error:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * 
 * @returns 
 */
export async function fetchProjectWithTasks(projectId: number): Promise<ProjectTaskDTO | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        tasks: {
          orderBy: [
            { priority: 'asc' },
            { description: 'asc' }
          ]
        }
      }
    });
    return project;
  } catch (error) {
    console.error('Prisma Error:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * 
 * @returns 
 */
export async function fetchProject(projectId: number): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId }
    });

    return project;
  } catch (error) {
    console.error('Prisma Error:', error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}