'use server';

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

/**
 * Attempts to sign in a user using credentials from the given form data.
 *
 * @param prevState - The previous state of the form (e.g. error message or status).
 * @param formData - The submitted form data containing user credentials.
 * @returns - A string describing an error if sign-in fails, or nothing if successful.
 */
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}