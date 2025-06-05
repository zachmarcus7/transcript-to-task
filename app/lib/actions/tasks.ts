'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { z } from 'zod';
import { GroqTaskParsed, Task } from '@/app/lib/types';

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
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath(`/projects/${projectId}`);
  redirect(`/projects/${projectId}`);
}

/**
 * 
 * @param projectId 
 * @param prevState 
 * @param formData 
 * @returns 
 */
export async function createMultipleTasks(projectId: number, tasks: GroqTaskParsed[]) {
  try {
    const convertedTasks = tasks.map(task => {
      if (task.description.length > 200) {
        task.description = task.description.substring(0, 200);
      }

      return {
        projectId: projectId,
        priority: Number(task.priority),
        description: task.description
      }
    });

    await prisma.task.createMany({
      data: convertedTasks
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    console.error(prismaError.stack);
    return { message: 'Failed to create tasks due to a database error.' };
  }

  revalidatePath(`/projects/${projectId}`);
  redirect(`/projects/${projectId}`);
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
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }

  revalidatePath(`/projects/${formData.get('projectId')}`);
  redirect(`/projects/${formData.get('projectId')}`);
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
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
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
    const prismaError = error as PrismaClientKnownRequestError;
    console.log(prismaError.stack);
  }
}