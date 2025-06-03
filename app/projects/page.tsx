import { Suspense } from "react";
import ProjectPreviewsContainer from "@/app/ui/projects/project-previews-container";
import ProjectPreviewsHeader from "@/app/ui/projects/project-previews-header";

export default function Page() {
  return (
    <>
      <ProjectPreviewsHeader displayActive={true} />
      <Suspense fallback={<>Loading...</>}>
        <ProjectPreviewsContainer displayActive={true} />
      </Suspense>
    </>
  );
}