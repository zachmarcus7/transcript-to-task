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
  id: z.number(),
  description: z.string(),
  priority: z.number(),
  projectId: z.number()
});

/**
 * Modified Validation Object.
 */
const CreateTask = TaskSchema.omit({ 
  id: true,
  projectId: true
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
  console.log("in createTask()");

for (const pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}

  // Validate form using Zod
  const validatedFields = CreateTask.safeParse({
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

  // Revalidate and redirect as needed
  revalidatePath('/overview');
  redirect('/overview');
}