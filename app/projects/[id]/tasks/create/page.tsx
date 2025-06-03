import CreateTaskForm from "@/app/ui/tasks/create-task-form";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);

  return (
   <CreateTaskForm projectId={id}/>
  );
}