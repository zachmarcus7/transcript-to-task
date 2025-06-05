import TranscriptsContainer from "@/app/ui/transcripts/transcripts-container";
import { fetchProjects } from "@/app/lib/data/projects";

export default async function Page() {
  // fetch active projects
  const projects = await fetchProjects(true);

  return (
    <TranscriptsContainer projects={projects} />
  );
}