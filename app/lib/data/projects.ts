'use server';

import { prisma } from '@/app/lib/prisma';
import { ProjectTaskDTO, Project } from '@/app/lib/types';

/**
 * Retrieves all projects and their associated task lists.
 * @returns - Array of ProjectTaskDTO objects.
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
 * Retrieves a specific project and its associated task list.
 * @returns - ProjectTaskDTO object or null if project not found.
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
 * Retrieves a specific project.
 * @returns - Project object or null if not found.
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