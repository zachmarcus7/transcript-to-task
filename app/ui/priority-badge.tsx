const priorityStyles: Record<number, { label: string; className: string }> = {
  1: { label: 'Critical', className: 'bg-red-100 text-red-700' },
  2: { label: 'High', className: 'bg-purpleish-500/20 text-purpleish-500' },
  3: { label: 'Medium', className: 'bg-blueish-300/20 text-blueish-300' },
  4: { label: 'Low', className: 'bg-slate-100 text-slate-400' },
};

export default function PriorityBadge({ 
  priority,
  showPriority 
}: { 
  priority: number | null;
  showPriority?: boolean; 
}) {
  // TODO: need to come back and not return null here
  if (priority === null)
    return null;

  const data = priorityStyles[priority] ?? { label: 'Unknown', className: 'bg-gray-100 text-gray-700' };

  return (
    <div className={`flex text-xs rounded-full w-fit px-3 py-0.5 font-medium max-h-[20px] ${data.className}`}>
      {data.label}
      {showPriority && (
        <>
          <span className="w-1 inline-block" />
          <span>Priority</span>
        </>
      )}
    </div>
  );
}