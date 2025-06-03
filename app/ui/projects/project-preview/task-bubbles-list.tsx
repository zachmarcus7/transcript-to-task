import { Task } from "@/app/lib/types";
import TaskBubbles from "@/app/ui/projects/project-preview/task-bubbles";

export default function TaskBubblesList({ 
  tasks 
}: { 
  tasks: Task[] 
}) {
  type Status = 'in_progress' | 'pending' | 'complete';

  const counts = tasks.reduce<Record<Status, number>>(
    (acc, task) => {
      if (task.status) {
        acc[task.status as Status] = (acc[task.status as Status] || 0) + 1;
      }
      return acc;
    },
    { in_progress: 0, pending: 0, complete: 0 }
  );

  // if no tasks, return message indicating that
  if (Object.values(counts).every(c => c === 0)) {
    return (
      <div className="rounded-full bg-slate-100">
        <p className="text-slate-400 text-sm font-medium text-nowrap px-4 py-1">No Currently Tracked Tasks</p>
      </div>
    );
  }

  return (
    <div>
      {counts.in_progress > 0 && <TaskBubbles type="in_progress" amount={counts.in_progress} />}
      {counts.pending > 0 && <TaskBubbles type="pending" amount={counts.pending} />}
      {counts.complete > 0 && <TaskBubbles type="complete" amount={counts.complete} />}
    </div>
  );
}