'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

/**
 * Validation Object.
 */
const TaskSchema = z.object({
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
export async function createTask(projectId: number, prevState: State, formData: FormData) {
  const validatedFields = TaskSchema.safeParse({
    description: formData.get('description'),
    priority: Number(formData.get('priority'))
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Task.',
    };
  }

  const { description, priority } = validatedFields.data;

  try {
    await prisma.task.create({
      data: {
        description,
        priority: Number(priority),
        projectId: Number(projectId)
      }
    });
  } catch (error) {
    console.error('Prisma Error:', error);
    return {
      message: 'Database Error: Failed to Create Task.',
    };
  }

  revalidatePath(`/overview/projects/${projectId}`);
  redirect(`/overview/projects/${projectId}`);
}

/**
 * 
 * @param taskId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function editTask(taskId: number, prevState: State, formData: FormData) {
  const validatedFields = TaskSchema.safeParse({
    priority: Number(formData.get('priority')),
    description: formData.get('description')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Edit Task.',
    };
  }

  const { description, priority } = validatedFields.data;

  try {
    await prisma.task.update({
      where: {
        id: taskId
      },
      data: {
        description,
        priority: Number(priority)
      }
    });
  } catch (error) {
    console.error('Prisma Error:', error);
    return {
      message: 'Database Error: Failed to Edit Task.',
    };
  }

  revalidatePath(`/overview/projects/${formData.get('projectId')}`);
  redirect(`/overview/projects/${formData.get('projectId')}`);
}

/**
 * 
 * @param taskId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function editTaskStatus(taskId: number, newStatus: string) {
  console.log(newStatus);
  try {
    await prisma.task.update({
      where: {
        id: taskId
      },
      data: {
        status: newStatus
      }
    });
  } catch (error) {
    console.error('Prisma Error:', error);
    return {
      message: 'Database Error: Failed to Edit Task.',
    };
  }
}

/**
 * 
 * @param taskId 
 * @returns 
 */
export async function deleteTask(taskId: number) {
  try {
    await prisma.task.delete({
      where: { id: taskId }
    });
  } catch (error) {
    console.error('Prisma Error:', error);
    return {
      message: 'Database Error: Failed to Delete Task.',
    };
  }
}