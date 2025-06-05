import { Suspense } from "react";
import ProjectPreviewsContainer from "@/app/ui/projects/project-previews-container";
import ProjectPreviewsHeader from "@/app/ui/projects/project-previews-header";
import ProjectPreviewsLoadingSkeleton from "@/app/ui/projects/project-previews-loading-skeleton";

export default function Page() {
  return (
    <>
      <ProjectPreviewsHeader displayActive={false} />
      <Suspense fallback={<ProjectPreviewsLoadingSkeleton />}>
        <ProjectPreviewsContainer displayActive={false} />
      </Suspense>
    </>
  );
}