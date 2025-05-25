"use client";

import { redirect } from 'next/navigation';
import ButtonIcon from "@/app/ui/button-icon";

export default function ProjectOverview() {
  const taskID = 1;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 lg:w-96">

      <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Task Name Test</h5>
      <h6 className="text-sm text-slate-500 font-medium pb-5">Task Sub Header</h6>

      <div className="flex gap-3">

        <ButtonIcon
          addIcon={true}
          onClick={() => { redirect(`/overview/projects/${taskID}/add`) }}
        />

        <ButtonIcon
          editIcon={true}
          onClick={() => { redirect(`/overview/projects/${taskID}/edit`) }}
        />

        <ButtonIcon
          deleteIcon={true}
          onClick={() => { }}
        />

      </div>

      <ul className="pt-3">

        <li className="flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
          <div className="text-purpleish-500 font-extrabold">1</div>
          <p className="text-sm text-slate-400">Here is a task item, need to get this done. Few more words.</p>
          <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
        </li>

        <li className="flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
          <div className="text-purpleish-500 font-extrabold">2</div>
          <p className="text-sm text-slate-400">Here is a task item, need to get this done. Few more words.</p>
          <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
        </li>

        <li className="flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
          <div className="text-purpleish-500 font-extrabold">3</div>
          <p className="text-sm text-slate-400">Here is a task item, need to get this done. Few more words.</p>
          <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
        </li>

      </ul>

    </div>
  );
}