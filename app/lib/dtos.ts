import { Task } from "@/app/lib/models";

export type ProjectTaskDTO = {
  id: number;
  name: string;
  description: string | null;
  tasks: Task[];
};