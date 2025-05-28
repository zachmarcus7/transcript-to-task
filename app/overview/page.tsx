import { Suspense } from "react";
import ProjectOverviewList from "@/app/ui/overview/project-overview-list";
import OverviewHeader from "@/app/ui/overview/overview-header";

export default function Page() {
  return (
    <>
      <OverviewHeader />
      <Suspense fallback={<>Loading...</>}>
        <ProjectOverviewList />
      </Suspense>
    </>
  );
}