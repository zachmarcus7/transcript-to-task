'use server';

import { fetchGroqTranscriptParse } from "@/app/lib/data/groq";
import { GroqTaskParsed } from "@/app/lib/types/groq-response";

/**
 * Parses a transcript using the Groq API and returns a 
 * structured array of parsed tasks.
 *
 * @param formData - A FormData object containing the transcript text.
 * @returns - An array of GroqTaskParsed objects if parsing succeeds, or null if parsing fails.
 */
export async function parseTranscriptGroq(formData: FormData): Promise<GroqTaskParsed[] | null> {
  const transcript = formData.get('transcript') as string;
  const response = await fetchGroqTranscriptParse(transcript);

  // try to parse the returned JSON
  try {
    const raw = response.choices[0].message.content;
    const parsed = JSON.parse(raw) as GroqTaskParsed[];
    return parsed;
  } catch (err) {
    console.error('Failed to parse Groq response:', err);
    return null;
  }
}