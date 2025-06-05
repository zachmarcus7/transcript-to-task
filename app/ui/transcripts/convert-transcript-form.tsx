'use client';

import { redirect } from "next/navigation";
import ButtonPrimary from "@/app/ui/button-primary";
import { ProjectTaskDTO } from "@/app/lib/types";

export default function ConvertTranscriptForm({
  projects,
  onSubmit
}: {
  projects: ProjectTaskDTO[];
  onSubmit: (transcript: FormData) => Promise<void>
}) {
  return (
    <>
      <div className="pb-6">
        <ButtonPrimary
          text="Back"
          onClick={() => { redirect(`/projects`) }}
          backIcon={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Convert Task Transcript</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Upload task transcript to view AI-parsed task list</h6>

        <form action={onSubmit}>
          <select
            className="appearance-none bg-none w-full h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
            name="projectId"
            required
          >
            {projects.map(project => (
              <option key={project.id} value={project.id}>{project.name}</option>
            ))}
          </select>

          <textarea
            className="w-full h-36 pt-4 mt-4 border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600 resize-none"
            placeholder="Task Transcript"
            name="transcript"
            required
          ></textarea>

          <div className="flex justify-end mt-4">
            <ButtonPrimary
              text="Convert"
              addIcon={true}
              onClick={() => {}}
              isSubmit={true}
            />
          </div>

        </form>
      </div>
    </>
  );
}