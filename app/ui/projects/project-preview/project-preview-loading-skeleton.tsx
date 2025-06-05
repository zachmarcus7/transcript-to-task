const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function ProjectPreviewLoadingSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden bg-white rounded-2xl shadow-sm p-7`}>

      {/* Header Skeleton */}
      <div className="flex justify-between pb-2">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-slate-200 w-52 h-6"></div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="rounded-full bg-slate-200 w-8 h-4"></div>
          <div className="rounded-full bg-slate-200 w-4 h-4"></div>
        </div>
      </div>

      {/* Subheader Skeleton */}
      <div className="rounded-full bg-slate-200 w-full h-4 mt-4"></div>
      <div className="rounded-full bg-slate-200 w-80 h-4 mt-2"></div>

      {/* Body Skeleton */}
      <div className="flex justify-between items-end">
        <div className="flex gap-2">
          <div className="rounded-full bg-slate-200 h-6 w-6"></div>
          <div className="rounded-full bg-slate-200 h-6 w-6"></div>
          <div className="rounded-full bg-slate-200 h-6 w-6"></div>
        </div>
        <div className="rounded-full bg-slate-200 w-20 h-6 mt-12"></div>
      </div>
      
    </div>
  );
}