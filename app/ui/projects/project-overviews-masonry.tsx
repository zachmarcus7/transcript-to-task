"use client";

import { Masonry } from 'react-plock';
import ProjectOverview from "@/app/ui/projects/project-overview/project-overview";
import { ProjectTaskDTO } from '@/app/lib/dtos';

export default function ProjectOverviewsMasonry({
  projects
}: {
  projects: ProjectTaskDTO[]
}) {

  return (
    <Masonry
      items={projects}
      config={{ 
        columns: [1, 2, 3], 
        gap: [16, 20, 30],
        media: [1024, 1280, 1280]
      }}
      render={(project) => (
        <div key={project.id}>
          <ProjectOverview projectDetails={project} />
        </div>
      )}
    />
  );
}