'use client';

import { useState, useTransition } from 'react';
import { parseTranscriptGroq } from '@/app/lib/actions/groq';
import ConvertTranscriptForm from './convert-transcript-form';
import { GroqResponse, GroqTaskParsed } from '@/app/lib/types/groq-response';
import TranscriptResults from './results';

export default function TranscriptsContainer() {
  const [result, setResult] = useState<GroqTaskParsed[] | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleTranscriptSubmit(transcript: FormData) {
    const response = await parseTranscriptGroq(transcript);
    console.log(response);
    setResult(response);
  }

  return (
    <>
      {(result === null) &&
        <ConvertTranscriptForm onSubmit={handleTranscriptSubmit} />
      }
      {result && (
        // <div className="mt-6 bg-slate-50 border p-4 rounded-xl">
        //   <h6 className="font-medium mb-2">Generated Tasks:</h6>
        //   <pre className="whitespace-pre-wrap text-sm">{result.choices[0].message.content}</pre>
        // </div>

              <TranscriptResults tasks={result}/>
      )}
    </>
  );
}
