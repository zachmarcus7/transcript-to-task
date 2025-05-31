import { Suspense } from "react";
import ProjectOverviewsContainer from "@/app/ui/projects/project-overviews-container";
import OverviewHeader from "@/app/ui/overview/overview-header";

export default function Page() {
  return (
    <>
      <OverviewHeader />
      <Suspense fallback={<>Loading...</>}>
        <ProjectOverviewsContainer />
      </Suspense>
    </>
  );
}