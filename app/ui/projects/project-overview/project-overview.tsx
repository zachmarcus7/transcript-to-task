"use client";

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { ProjectTaskDTO } from '@/app/lib/types';
import { deleteTask, editTaskStatus } from '@/app/lib/actions/tasks';
import ProjectOverviewTasks from '@/app/ui/projects/project-overview/project-overview-tasks';
import ProjectOverviewTabs from '@/app/ui/projects/project-overview/project-overview-tabs';
import ButtonPrimary from '@/app/ui/button-primary';
import PriorityBadge from '@/app/ui/priority-badge';

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

  const handleTabChange = (newTab: 'in_progress' | 'pending' | 'complete') => {
    setTab(newTab);
  }

  /**
   * Updates the corresponding task depending on the current tab selected.
   * @param taskId - Task ID.
   */
  const handleTaskUpdate = async (taskId: number) => {
    setSelectedTask(taskId);

    if (tab !== 'complete') {
      try {
        // update task status
        const status = (tab === 'pending') ? 'complete' : 'pending';
        await editTaskStatus(taskId, status);

        // update current tasks for UI
        const nextTasks = tasks.map(task => {
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
    <>

      <div className="pb-6">
        <ButtonPrimary
          text="Back"
          onClick={() => { redirect(`/projects`) }}
          backIcon={true}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-7">

        <div className="flex justify-between">
          <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-2">{projectDetails.name}</h5>
          <PriorityBadge priority={projectDetails.priority} showPriority={true} />
        </div>

        <h6 className="text-sm text-slate-500 font-medium pb-5">{projectDetails.description}</h6>


        <div className="flex justify-between">
          <ProjectOverviewTabs
            currentTab={tab}
            onTabChange={handleTabChange}
          />

          <ButtonPrimary
            onClick={() => { redirect(`/projects/${projectDetails.id}/tasks/create`) }}
            text="Add Task"
            addIcon={true}
          />
        </div>

        <ProjectOverviewTasks
          tasks={tasks}
          currentTab={tab}
          projectDetails={projectDetails}
          currentTaskAction={currentTaskAction}
          selectedTask={selectedTask}
          handleTaskUpdate={handleTaskUpdate}
        />

      </div>
    </>
  );
}