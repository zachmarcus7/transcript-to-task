import { notFound } from "next/navigation";
import { fetchProjectWithTasks } from "@/app/lib/data/projects";
import ProjectOverview from "@/app/ui/projects/project-overview/project-overview";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const selectedProject = await fetchProjectWithTasks(id);

  if (selectedProject === null)
    return notFound();

  return (
    <ProjectOverview projectDetails={selectedProject} />
  );
}