"use client";

import { redirect } from 'next/navigation';
import ButtonIcon from "@/app/ui/button-icon";
import { ProjectTaskDTO } from '@/app/lib/dtos';

export default function ProjectOverview({
  projectDetails
}: {
  projectDetails: ProjectTaskDTO
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 lg:w-96">

      <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">{projectDetails.name}</h5>
      <h6 className="text-sm text-slate-500 font-medium pb-5">{projectDetails.description}</h6>

      <div className="flex gap-3">

        <ButtonIcon
          addIcon={true}
          onClick={() => { redirect(`/overview/projects/${projectDetails.id}/tasks/create`) }}
        />

        <ButtonIcon
          editIcon={true}
          onClick={() => { redirect(`/overview/projects/${projectDetails.id}/edit`) }}
        />

        <ButtonIcon
          deleteIcon={true}
          onClick={() => { }}
        />

      </div>

      <ul className="pt-3">

        {projectDetails.tasks.map(task => (
          <li key={task.id} className="flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2 w-full">
            <div className="text-purpleish-500 font-extrabold">{task.priority}</div>
            <p className="text-sm text-slate-400 w-full">{task.description}</p>
            <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
          </li>
        ))}

      </ul>

    </div>
  );
}