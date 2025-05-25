"use client";

import { redirect } from 'next/navigation';
import ButtonPrimary from "@/app/ui/button-primary"

export default function Page() {
  return (
    <>
      <div className="pb-6">
        <ButtonPrimary
          text="Back"
          onClick={() => { redirect(`/overview`) }}
          backIcon={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Edit Project Details</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Edit the project name and description</h6>

        <input
          className="w-full h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
          placeholder="Project Name"
        ></input>

        <input
          className="w-full h-12 mt-4 border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
          placeholder="Project Description"
        ></input>

        <div className="flex justify-end mt-4">
          <ButtonPrimary
            text="Save"
            onClick={() => { }}
            uploadIcon={true}
          ></ButtonPrimary>
        </div>

      </div>
    </>
  );
}