"use client";

import { useActionState } from 'react';
import { redirect } from 'next/navigation';
import ButtonPrimary from "@/app/ui/button-primary";
import { editProject, State } from '@/app/lib/actions/projects';
import { Project } from '@/app/lib/models';

export default function EditProjectForm({
  project
}: {
  project: Project
}) {
  const initialState: State = { message: null, errors: {} };
  const editProjectWithId = editProject.bind(null, project.id);
  const [state, formAction] = useActionState(editProjectWithId, initialState);

  return (
    <>
      <div className="pb-6">
        <ButtonPrimary
          text="Back"
          onClick={() => { redirect(`/overview`) }}
          backIcon={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Edit {project.name}</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Edit the selected project's details below</h6>

         <form action={formAction}>

          <input
            name="name"
            className="w-full lg:w-60 h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600 mr-4"
            placeholder="Project Name"
            maxLength={60}
            required
            defaultValue={project.name}
          ></input>

          <input
            name="priority"
            className="w-full lg:w-60 h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
            placeholder="Priority (1 - 4)"
            type="number"
            max="4"
            min="1"
            required
            defaultValue={project.priority ?? 1}
          ></input>

          <textarea
            name="description"
            className="w-full h-36 pt-4 mt-4 border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600 resize-none"
            placeholder="Task Description"
            maxLength={200}
            required
            defaultValue={project.description ?? ""}
          ></textarea>

          <div className="flex justify-end mt-4">
            <ButtonPrimary
              isSubmit={true}
              text="Create"
              onClick={() => { }}
              addIcon={true}
            ></ButtonPrimary>
          </div>

        </form> 

      </div>
    </>
  );
}