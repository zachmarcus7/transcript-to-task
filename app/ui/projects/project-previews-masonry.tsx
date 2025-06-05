"use client";

import { Masonry } from 'react-plock';
import ProjectPreview from "@/app/ui/projects/project-preview/project-preview";
import { ProjectTaskDTO } from '@/app/lib/types';

export default function ProjectPreviewsMasonry({
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
          <ProjectPreview projectDetails={project} />
        </div>
      )}
    />
  );
}