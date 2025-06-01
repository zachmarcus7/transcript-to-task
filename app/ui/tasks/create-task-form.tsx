'use client';

import { useActionState } from 'react';
import { redirect } from 'next/navigation';
import ButtonPrimary from "@/app/ui/button-primary";
import { createTask, State } from '@/app/lib/actions/tasks';

export default function CreateTaskForm({
  projectId
}: {
  projectId?: number
}) {
  const initialState: State = { message: null, errors: {} };
  const createTaskWithId = createTask.bind(null, projectId!);
  const [state, formAction] = useActionState(createTaskWithId, initialState);

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
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Add New Task</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Manually add a new task to the selected project</h6>

         <form action={formAction}>

          <select
            name="priority"
            className="appearance-none bg-none w-full lg:w-60 h-12 md:w-[500px] border border-slate-200 rounded-xl px-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
            required
          >
            <option value={4}>Low</option>
            <option value={3}>Medium</option>
            <option value={2}>High</option>
            <option value={1}>Critical</option>
          </select>

          <textarea
            name="description"
            className="w-full h-36 pt-4 mt-4 border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600 resize-none"
            placeholder="Task Description"
            required
          ></textarea>

          <div className="flex justify-end mt-4">
            <ButtonPrimary
              isSubmit={true}
              text="Add"
              onClick={() => { }}
              addIcon={true}
            ></ButtonPrimary>
          </div>

        </form> 

      </div>
    </>
  );
}