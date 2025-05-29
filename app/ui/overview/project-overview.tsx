"use client";

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import { ProjectTaskDTO } from '@/app/lib/dtos';
import TooltipContainer from '@/app/ui/tooltip';
import { deleteTask, editTaskStatus } from '@/app/lib/actions/tasks';
import ProjectOverviewMenu from '@/app/ui/overview/project-overview-menu';

export default function ProjectOverview({
  projectDetails
}: {
  projectDetails: ProjectTaskDTO
}) {
  const [tasks, setTasks] = useState(projectDetails.tasks);
  const [tab, setTab] = useState<'in_progress' | 'pending' | 'complete'>('in_progress');
  const [selectedTask, setSelectedTask] = useState<number | undefined>(undefined);

  // set the tooltip for the task action checkbox
  let currentTaskAction = "Mark As Pending";
  if (tab === 'pending') currentTaskAction = 'Mark As Complete';
  if (tab === 'complete') currentTaskAction = 'Remove Task';

  /**
   * 
   * @param taskId 
   */
  const handleTaskUpdate = async (taskId: number) => {
    setSelectedTask(taskId);

    if (tab !== 'complete') {
      try {
        // update task status
        let status = (tab === 'pending') ? 'complete' : 'pending';
        await editTaskStatus(taskId, status);
        
        // update current tasks for UI
        let nextTasks = tasks.map(task => {
          if (task.id === taskId) {
            console.log("in here");
            return {
              ...task,
              status: status
            }
          }
          return task;
        });

        // update UI
        setTasks(nextTasks);
        setSelectedTask(undefined);
      } catch (error) {
        console.error('Failed to delete task', error);
      }
    } else {
      try {
        // remove task
        await deleteTask(taskId);

        // update UI
        setTasks(prev => prev.filter(task => task.id !== taskId));
        setSelectedTask(undefined);
      } catch (error) {
        console.error('Failed to delete task', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-center pb-3">
          <div className="bg-purpleish-500 rounded-full text-white font-bold flex justify-center items-center p-3 h-5 w-5 shadow-sm">{projectDetails.priority}</div>
          <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-px">{projectDetails.name}</h5>
        </div>
        <ProjectOverviewMenu projectId={projectDetails.id} />
      </div>
      <h6 className="text-sm text-slate-500 font-medium pb-5">{projectDetails.description}</h6>

      {/* Tab Selector */}
      <ul className="flex gap-4 bg-slate-100 rounded-md py-1 px-2 w-fit">
        <li 
          onClick={() => {setTab('in_progress')}} 
          className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${tab === 'in_progress' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
        >
          In Progress
        </li>
        <li 
          onClick={() => {setTab('pending')}} 
          className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${tab === 'pending' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
        >
          Pending
        </li>
        <li 
          onClick={() => {setTab('complete')}}
          className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${tab === 'complete' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
        >
          Complete
        </li>
      </ul>

      {/* Task List */}
      <ul className="pt-3">

        {tasks.map(task => (
          <li key={task.id} className={`flex gap-4 border-b border-b-slate-200 last:border-b-0 py-4 px-2 w-full ${task.status !== tab && 'hidden'}`}>
            <div className="text-purpleish-500 font-extrabold">{task.priority}</div>
            <p className="text-sm text-slate-400 w-full pt-0.5">{task.description}</p>
            <div className="flex gap-2">
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

    </div>
  );
}