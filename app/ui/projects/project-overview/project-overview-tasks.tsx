'use client';

import { redirect } from 'next/navigation';
import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import TooltipContainer from '@/app/ui/tooltip';
import { ProjectTaskDTO, Task } from '@/app/lib/types';
import ProjectOverviewTaskPriority from '@/app/ui/projects/project-overview/project-overview-task-priority';

export default function ProjectOverviewTasks({
  tasks,
  currentTab,
  projectDetails,
  currentTaskAction,
  selectedTask,
  handleTaskUpdate
}: {
  tasks: Task[];
  currentTab: string;
  projectDetails: ProjectTaskDTO,
  currentTaskAction: string,
  selectedTask?: number,
  handleTaskUpdate: (id: number) => void
}) {
  return (
    <ul className="pt-3">

      {tasks.map(task => (
        <li key={task.id} className={`flex gap-4 w-full shadow-sm rounded-md mb-2 overflow-hidden cursor-pointer hover:bg-slate-50 transition ease ${task.status !== currentTab && 'hidden'}`}>

          <ProjectOverviewTaskPriority  priority={task.priority} />

          <p className="text-sm text-slate-400 w-full p-3 mt-0.5">{task.description}</p>

          {/* Right Actions */}
          <div className="flex gap-2 p-3">

            <TooltipContainer message="Edit Task">
              <div
                className={`p-1 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200 transition-all ease h-fit`}
                onClick={() => { redirect(`/overview/projects/${projectDetails.id}/tasks/${task.id}/edit`) }}
              >
                <PencilIcon
                  height={15}
                  width={15}
                  className="text-slate-400"
                />
              </div>
            </TooltipContainer>

            <TooltipContainer message={currentTaskAction}>
              <div
                className={`p-1 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200 transition-all ease h-fit ${task.id === selectedTask && 'bg-purpleish-600'}`}
                onClick={() => { handleTaskUpdate(task.id) }}
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
  );
}