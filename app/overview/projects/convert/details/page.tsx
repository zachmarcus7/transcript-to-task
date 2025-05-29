"use client";

import { redirect } from 'next/navigation';
import ButtonPrimary from "@/app/ui/button-primary"

export default function Page() {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Converstion Results</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">View AI recommendations for parsed tasks from the transcript below. Use the right checkboxes to select which tasks to add to the project.</h6>

        <ul className="pt-3">

          <li className="w-full justify-between flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
            <div className="flex gap-4">
              <div className="text-purpleish-500 font-extrabold">1</div>
              <p className="text-sm text-slate-400 pt-0.5">Here is a task item, need to get this done. Few more words.</p>
            </div>
            <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
          </li>

          <li className="w-full justify-between flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
            <div className="flex gap-4">
              <div className="text-purpleish-500 font-extrabold">1</div>
              <p className="text-sm text-slate-400 pt-0.5">Here is a task item, need to get this done. Few more words.</p>
            </div>
            <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
          </li>

          <li className="w-full justify-between flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2">
            <div className="flex gap-4">
              <div className="text-purpleish-500 font-extrabold">1</div>
              <p className="text-sm text-slate-400 pt-0.5">Here is a task item, need to get this done. Few more words.</p>
            </div>
            <div className="h-5 w-5 shrink-0 rounded-full border border-slate-300 cursor-pointer hover:bg-slate-200"></div>
          </li>

        </ul>

        <div className="flex justify-end mt-4">
          <ButtonPrimary
            text="Finish"
            onClick={() => { redirect("/overview") }}
          ></ButtonPrimary>
        </div>

      </div>
    </>
  );
}