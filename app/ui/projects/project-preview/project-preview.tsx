"use client";

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { ProjectTaskDTO } from '@/app/lib/dtos';
import { deleteTask, editTaskStatus } from '@/app/lib/actions/tasks';
import ProjectPreviewMenu from '@/app/ui/projects/project-preview/project-preview-menu';
import ButtonSecondary from '@/app/ui/button-secondary';
import TaskBubblesList from '@/app/ui/projects/project-preview/task-bubbles-list';

export default function ProjectPreview({
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
   * @param newTab 
   */
  const handleTabChange = (newTab: 'in_progress' | 'pending' | 'complete') => {
    setTab(newTab);
  }

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
    <div className="bg-white rounded-2xl shadow-sm p-7">

      {/* Header */}
      <div className="flex justify-between pb-2">
        <div className="flex gap-2 items-center">
          <h5 className="text-lg text-slate-700 font-sp font-extrabold">{projectDetails.name}</h5>
        </div>
        <div className="flex gap-1 items-center">
          <div className={`text-xs bg-purpleish-500/20 rounded-full text-purpleish-600 w-fit px-3 py-0.5 font-medium`}>High Priority</div>
          <ProjectPreviewMenu projectId={projectDetails.id} />
        </div>
      </div>

      {/* Sub-header */}
      <h6 className="text-sm text-slate-400 font-medium pb-5 mr-10 leading-6">{projectDetails.description}</h6>

      {/* Body */}
      <div className="flex justify-between items-end">
        <TaskBubblesList tasks={projectDetails.tasks} />
        <div className="w-full flex justify-end">
          <ButtonSecondary
            text='View Tasks'
            onClick={() => { redirect(`/overview/projects/${projectDetails.id}/tasks/overview`) }}
            small={true}
          />
        </div>
      </div>

    </div>
  );
}