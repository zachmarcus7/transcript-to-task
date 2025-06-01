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

  console.log(task.priority);

  return (
    <>
      <div className="pb-6">
        <ButtonPrimary
          text="Back"
          onClick={() => { redirect(`/overview/projects/${task.projectId}`) }}
          backIcon={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">Edit Task</h5>
        <h6 className="text-sm text-slate-500 font-medium pb-5">Edit the selected task's details below</h6>

         <form action={formAction}>

          <select
            name="priority"
            className="appearance-none bg-none w-full lg:w-60 h-12 md:w-[500px] border border-slate-200 rounded-xl px-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
            required
            defaultValue={task.priority}
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
            defaultValue={task.description}
          ></textarea>

          {/* Used with Redirection */}
          <input type="hidden" name="projectId" value={task.projectId} />

          <div className="flex justify-end mt-4">
            <ButtonPrimary
              isSubmit={true}
              text="Save"
              onClick={() => { }}
            ></ButtonPrimary>
          </div>

        </form> 

      </div>
    </>
  );
}