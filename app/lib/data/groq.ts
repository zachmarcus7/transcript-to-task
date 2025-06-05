import { GroqResponse } from "@/app/lib/types/groq-response";

const GROQ_API_KEY = "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";
const GROQ_API_BASE = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Sends a request to the Groq API to attempt to parse the passed transcript into an
 * array of tasks.
 * @param transcript - Transcript to parse (string).
 * @returns - Array of GroqResponse objects.
 */
export async function fetchGroqTranscriptParse(transcript: string): Promise<GroqResponse> {
  const res = await fetch(GROQ_API_BASE, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-4-scout-17b-16e-instruct',
      messages: [
        {
          role: "user",
          content: `Convert the transcript at the end of this message to a task list. Return ONLY a raw JSON array starting directly with the opening bracket. Do NOT include markdown, explanations, or code blocks. Each task should follow this format: { \"description\": \"task description\", \"priority\": \"1-4" }. TRANSCRIPT START: ${transcript} `
        }
      ]
    })
  });

  if (!res.ok) 
    throw new Error('Groq API call failed');

  return await res.json();
}