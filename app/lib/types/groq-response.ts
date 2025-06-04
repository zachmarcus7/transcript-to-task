export type GroqResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: GroqChoice[];
  usage: GroqUsage;
}

export type GroqChoice = {
  index: number;
  message: GroqMessage;
  logprobs: string | null;
  finish_reason: string;
}

export type GroqMessage = {
  role: string;
  content: string;
}

export type GroqUsage = {
  queue_time: number;
  prompt_tokens: number;
  prompt_time: number;
  completion_tokens: number;
  completion_time: number;
  total_tokens: number;
  total_time: number;
}

export type GroqTaskParsed = {
  priority: string;
  description: string;
}