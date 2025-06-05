"use client";

import { Masonry } from 'react-plock';
import ProjectPreviewLoadingSkeleton from './project-preview/project-preview-loading-skeleton';

export default function ProjectPreviewsLoadingSkeleton() {
  return (
    <Masonry
      items={[1, 2, 3, 4, 5]}
      config={{ 
        columns: [1, 2, 3], 
        gap: [16, 20, 30],
        media: [1024, 1280, 1280]
      }}
      render={(project) => (
        <div key={project}>
          <ProjectPreviewLoadingSkeleton />
        </div>
      )}
    />
  );
}