import { fetchProjects } from "@/app/lib/data";
import ProjectOverview from "@/app/ui/overview/project-overview";

export default async function ProjectOverviewList() {
  const projects = await fetchProjects();

  return (
    <>
      {projects.map(project => (
        <ProjectOverview key={project.id} projectDetails={project} />
      ))}
    </>
  );
}