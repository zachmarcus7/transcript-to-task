export type Project = {
  id: number;
  name: string;
  description: string | null;
  priority: number | null;
  archived: boolean | null;
}