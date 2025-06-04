'use server';

import { fetchGroqTranscriptParse } from "@/app/lib/data/groq";
import { GroqResponse, GroqTaskParsed } from "../types/groq-response";

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