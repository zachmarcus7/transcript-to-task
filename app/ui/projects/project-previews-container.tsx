import { fetchProjects } from "@/app/lib/data/projects";
import ProjectPreviewsMasonry from '@/app/ui/projects/project-previews-masonry';

export default async function ProjectPreviewsContainer() {
  const projects = await fetchProjects();

  return (
    <ProjectPreviewsMasonry projects={projects} />
  );
}