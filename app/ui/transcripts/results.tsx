'use client';

import ButtonPrimary from "@/app/ui/button-primary";
import { CheckIcon } from '@heroicons/react/24/outline';
import TooltipContainer from '@/app/ui/tooltip';
import ProjectOverviewTaskPriority from '@/app/ui/projects/project-overview/project-overview-task-priority';
import { GroqTaskParsed } from "@/app/lib/types/groq-response";

export default function TranscriptResults({
  tasks
}: {
  tasks: GroqTaskParsed[]
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Converstion Results</h5>
      <h6 className="text-sm text-slate-500 font-medium pb-5">View AI recommendations for parsed tasks from the transcript below. Use the right checkboxes to select which tasks to add to the project.</h6>

      <ul className="pt-3">
        {tasks.map(task => (
          <li key={task.description} className={`flex gap-4 w-full shadow-sm rounded-md mb-2 overflow-hidden cursor-pointer hover:bg-slate-50 transition ease`}>

            <ProjectOverviewTaskPriority priority={Number(task.priority)} />

            <p className="text-sm text-slate-400 w-full p-3 mt-0.5">{task.description}</p>

            {/* Right Actions */}
            <div className="flex gap-2 p-3">

              <TooltipContainer message="Confirm Task">
                <div
                  className={`p-1 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200 transition-all ease h-fit`}
                  onClick={() => { }}
                >
                  <CheckIcon
                    height={15}
                    width={15}
                    className="text-slate-400"
                  />
                </div>
              </TooltipContainer>

            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-end mt-4">
        <ButtonPrimary
          text="Finish"
          onClick={() => { }}
        ></ButtonPrimary>
      </div>

    </div>
  );
}