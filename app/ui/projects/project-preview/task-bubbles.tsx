const typeRecord: Record<string, string> = {
  'in_progress': 'In Progress',
  'pending': 'Pending',
  'complete': 'Complete'
}

export default function TaskBubbles({
  type,
  amount
}: {
  type: string;
  amount: number;
}) {
  const maxBubbles = 4;
  const bubblesToShow = Math.min(amount, maxBubbles);

  // configure text inside the last bubble
  let bubbleText = String(Math.min(amount, bubblesToShow));
  if (bubblesToShow < amount) bubbleText += '+';

  // configure bubble color
  let background = 'bg-purpleish-600/80';
  if (type === 'pending') background = 'bg-blueish-300';
  if (type === 'complete') background = 'bg-slate-300';

  // calculate total width
  const bubbleSpacing = 24;
  const totalWidth = (bubblesToShow - 1) * bubbleSpacing + 32;

  return (
    <div className="flex items-center gap-2">
      <div className="relative h-8" style={{ width: `${totalWidth}px` }}>
        {[...Array(bubblesToShow)].map((_, i) => {
          const left = i * bubbleSpacing;
          const isLast = i === bubblesToShow - 1;
          return (
            <div
              key={i}
              className={`absolute h-8 w-8 border-4 border-white top-0 rounded-full flex justify-center items-center ${background}`}
              style={{ left }}
            >
              {isLast && (
                <p className="text-white text-sm font-medium">{bubbleText}</p>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-sm text-slate-400 font-medium text-nowrap">
        {typeRecord[type]}
      </p>
    </div>
  );
}