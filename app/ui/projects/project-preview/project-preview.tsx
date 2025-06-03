import { redirect } from 'next/navigation';
import { ProjectTaskDTO } from '@/app/lib/types';
import ButtonSecondary from '@/app/ui/button-secondary';
import PriorityBadge from '@/app/ui/priority-badge';
import ProjectPreviewMenu from '@/app/ui/projects/project-preview/project-preview-menu';
import TaskBubblesList from '@/app/ui/projects/project-preview/task-bubbles-list';

export default function ProjectPreview({
  projectDetails
}: {
  projectDetails: ProjectTaskDTO
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-7">

      {/* Header */}
      <div className="flex justify-between pb-2">
        <div className="flex gap-2 items-center">
          <h5 className="text-lg text-slate-700 font-sp font-extrabold">{projectDetails.name}</h5>
        </div>
        <div className="flex gap-1 items-center">
          <PriorityBadge priority={projectDetails.priority} />
          <ProjectPreviewMenu projectId={projectDetails.id} />
        </div>
      </div>

      {/* Subheader */}
      <h6 className="text-sm text-slate-400 font-medium pb-5 mr-10 leading-6">{projectDetails.description}</h6>

      {/* Body */}
      <div className="flex justify-between items-end">
        <TaskBubblesList tasks={projectDetails.tasks} />

        <div className="w-full flex justify-end">
          
          {projectDetails.tasks.length > 0 ? (
            <ButtonSecondary
              text='View Tasks'
              onClick={() => { redirect(`/overview/projects/${projectDetails.id}`) }}
              small={true}
              forwardIcon={true}
            />
          ) : (
            <ButtonSecondary
              text='Add Task'
              onClick={() => { redirect(`/overview/projects/${projectDetails.id}/tasks/create`) }}
              small={true}
              addIcon={true}
            />
          )}

        </div>

      </div>
    </div>
  );
}