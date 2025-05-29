import { fetchProjects } from "@/app/lib/data/projects";
import ProjectOverviewMasonry from './project-overview-masonry';

export default async function ProjectOverviewList() {
  const projects = await fetchProjects();

  return (
    <ProjectOverviewMasonry projects={projects} />
  );
}