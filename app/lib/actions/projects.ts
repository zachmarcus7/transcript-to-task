'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { z } from 'zod';

const prisma = new PrismaClient();

/**
 * Validation Object.
 */
const ProjectSchema = z.object({
  name: z.string(),
  description: z.string(),
  priority: z.number()
});

/**
 * Form State Object.
 */
export type State = {
  errors?: {};
  message?: string | null;
};

/**
 * 
 * @param projectId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function createProject(prevState: State, formData: FormData) {
  const validatedFields = ProjectSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    priority: Number(formData.get('priority'))
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

  const { name, description, priority } = validatedFields.data;

  try {
    await prisma.project.create({
      data: {
        name: name,
        description,
        priority: Number(priority)
      }
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath('/projects');
  redirect('/projects');
}

/**
 * 
 * @param projectId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function editProject(projectId: number, prevState: State, formData: FormData) {
  const validatedFields = ProjectSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    priority: Number(formData.get('priority'))
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Project.',
    };
  }

  const { name, description, priority } = validatedFields.data;

  try {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        name: name,
        description,
        priority: Number(priority)
      }
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath('/projects');
  redirect('/projects');
}

/**
 * 
 * @param projectId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function archiveProject(projectId: number) {
  try {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        archived: true
      }
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath('/projects');
  redirect('/projects');
}

/**
 * 
 * @param projectId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function activateProject(projectId: number) {
  try {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        archived: false
      }
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath('/projects/archived');
  redirect('/projects/archived');
}

/**
 * 
 * @param projectId 
 * @returns 
 */
export async function deleteProject(projectId: number) {
  try {
    await prisma.project.delete({
      where: { id: projectId }
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath('/projects/archived');
  redirect('/projects/archived');
}