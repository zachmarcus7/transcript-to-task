"use client";

import { useState } from 'react';
import { ProjectTaskDTO } from '@/app/lib/dtos';
import { deleteTask, editTaskStatus } from '@/app/lib/actions/tasks';
import ProjectOverviewMenu from '@/app/ui/projects/project-overview/project-overview-menu';
import ProjectOverviewTasks from './project-overview-tasks';
import ProjectOverviewTabs from './project-overview-tabs';

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
      <div className="flex justify-between">
        <div className="flex gap-3 items-center pb-3">
          <div className="bg-purpleish-500 rounded-full text-white font-bold flex justify-center items-center p-3 h-5 w-5 shadow-sm">{projectDetails.priority}</div>
          <h5 className="text-lg text-slate-700 font-sp font-extrabold pb-px">{projectDetails.name}</h5>
        </div>
        <ProjectOverviewMenu projectId={projectDetails.id} />
      </div>
      <h6 className="text-sm text-slate-500 font-medium pb-5">{projectDetails.description}</h6>

      <ProjectOverviewTabs
        currentTab={tab}
        onTabChange={handleTabChange}
      />

      <ProjectOverviewTasks
        tasks={tasks}
        currentTab={tab}
        projectDetails={projectDetails}
        currentTaskAction={currentTaskAction}
        selectedTask={selectedTask}
        handleTaskUpdate={handleTaskUpdate}
      />

    </div>
  );
}