import { Suspense } from "react";
import ProjectPreviewsContainer from "@/app/ui/projects/project-previews-container";
import OverviewHeader from "@/app/ui/overview/overview-header";

export default function Page() {
  return (
    <>
      <OverviewHeader displayActive={true} />
      <Suspense fallback={<>Loading...</>}>
        <ProjectPreviewsContainer displayActive={true} />
      </Suspense>
    </>
  );
}