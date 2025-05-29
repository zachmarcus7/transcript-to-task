import { notFound } from "next/navigation";
import { fetchTask } from "@/app/lib/data/tasks";
import EditTaskForm from "@/app/ui/tasks/edit-task-form";

export default async function Page(props: { params: Promise<{ taskId: string }> }) {
  const params = await props.params;
  const id = Number(params.taskId);
  const selectedTask = await fetchTask(id);

  if (selectedTask === null) 
    return notFound();
  
  return (
    <EditTaskForm task={selectedTask} />
  );
}