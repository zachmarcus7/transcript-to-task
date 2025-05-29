'use client';

import { useActionState } from 'react';
import { redirect } from 'next/navigation';
import ButtonPrimary from "@/app/ui/button-primary"
import { editTask, State } from '@/app/lib/actions/tasks';
import { Task } from '@/app/lib/models';

export default function EditTaskForm({
  task
}: {
  task: Task
}) {
  const initialState: State = { message: null, errors: {} };
  const editTaskWithId = editTask.bind(null, task.id!);
  const [state, formAction] = useActionState(editTaskWithId, initialState);

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
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Edit Task</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Edit the selected task's details below</h6>

         <form action={formAction}>

          <input
            name="priority"
            className="w-full lg:w-60 h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
            placeholder="Priority (1 - 4)"
            type="number"
            max="4"
            min="1"
            required
            defaultValue={task.priority}
          ></input>

          <textarea
            name="description"
            className="w-full h-36 pt-4 mt-4 border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600 resize-none"
            placeholder="Task Description"
            required
            defaultValue={task.description}
          ></textarea>

          <div className="flex justify-end mt-4">
            <ButtonPrimary
              isSubmit={true}
              text="Save"
              onClick={() => { }}
              addIcon={true}
            ></ButtonPrimary>
          </div>

        </form> 

      </div>
    </>
  );
}