export type Project = {
  id: number;
  name: string;
  description: string | null;
  priority: number | null;
  archived: boolean | null;
}

export type Task = {
  id: number;
  description: string;
  priority: number;
  projectId: number;
  status: string;
}

export type User = {
  id: number;
  username: string;
  password: string;
};

export type UserProject = {
  userId: number;
  projectId: number;
};