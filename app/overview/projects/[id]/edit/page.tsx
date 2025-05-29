import { notFound } from "next/navigation";
import { fetchProject } from "@/app/lib/data/projects";
import EditProjectForm from "@/app/ui/projects/edit-project-form";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const selectedProject = await fetchProject(id);

  if (selectedProject === null) 
    return notFound();
  
  return (
    <EditProjectForm project={selectedProject} />
  );
}