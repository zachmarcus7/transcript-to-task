import { fetchProjects } from "@/app/lib/data/projects";
import ProjectOverviewsMasonry from '@/app/ui/projects/project-overviews-masonry';

export default async function ProjectOverviewsContainer() {
  const projects = await fetchProjects();

  return (
    <ProjectOverviewsMasonry projects={projects} />
  );
}