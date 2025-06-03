import { Task } from "@/app/lib/types";

export type ProjectTaskDTO = {
  id: number;
  name: string;
  description: string | null;
  priority: number | null;
  tasks: Task[];
  archived: boolean;
};