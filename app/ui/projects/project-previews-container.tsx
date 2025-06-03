import { fetchProjects } from "@/app/lib/data/projects";
import ProjectPreviewsMasonry from '@/app/ui/projects/project-previews-masonry';

export default async function ProjectPreviewsContainer({
  displayActive
}: {
  displayActive: boolean;
}) {
  const projects = await fetchProjects(displayActive);

  return (
    <ProjectPreviewsMasonry projects={projects} />
  );
}