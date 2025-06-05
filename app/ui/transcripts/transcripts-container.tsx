'use client';

import { useState } from 'react';
import { parseTranscriptGroq } from '@/app/lib/actions/groq';
import ConvertTranscriptForm from './convert-transcript-form';
import { GroqTaskParsed } from '@/app/lib/types/groq-response';
import TranscriptResults from '@/app/ui/transcripts/results';
import { ProjectTaskDTO } from '@/app/lib/types';
import { createMultipleTasks } from '@/app/lib/actions/tasks';

export default function TranscriptsContainer({
  projects
}: {
  projects: ProjectTaskDTO[]
}) {
  const [projectId, setProjectId] = useState<number>(0);
  const [result, setResult] = useState<GroqTaskParsed[] | null>(null);
  const [acceptedTasks, setAcceptedTasks] = useState<GroqTaskParsed[]>([]);

  async function handleTranscriptSubmit(transcriptForm: FormData) {
    setProjectId(Number(transcriptForm.get('projectId')));
    const response = await parseTranscriptGroq(transcriptForm);
    console.log(response);
    setResult(response);
  }

  async function handleTaskUpload() {
    await createMultipleTasks(projectId, acceptedTasks);
  }

  const handleTaskClick = (task: GroqTaskParsed) => {
    if (acceptedTasks.includes(task)) {
      setAcceptedTasks(acceptedTasks.filter(t => t !== task));
    } else {
      setAcceptedTasks([...acceptedTasks, task]);
    }
  }

  return (
    <>
      {result ? (
        <TranscriptResults 
          tasks={result}
          acceptedTasks={acceptedTasks}
          onTaskClick={handleTaskClick}
          onUpload={handleTaskUpload}
        />
      ) : (
        <ConvertTranscriptForm 
          projects={projects}
          onSubmit={handleTranscriptSubmit} 
        />
      )}
    </>
  );
}