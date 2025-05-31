'use client';

export default function ProjectOverviewTabs({
  currentTab,
  onTabChange
}: {
  currentTab: string;
  onTabChange: (newTab: 'in_progress' | 'pending' | 'complete') => void;
}) {
  return (
    <ul className="flex gap-4 bg-slate-100 rounded-md py-1 px-2 w-fit">
      <li
        onClick={() => { onTabChange('in_progress') }}
        className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${currentTab === 'in_progress' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
      >
        In Progress
      </li>
      <li
        onClick={() => { onTabChange('pending') }}
        className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${currentTab === 'pending' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
      >
        Pending
      </li>
      <li
        onClick={() => { onTabChange('complete') }}
        className={`text-sm text-slate-500 font-medium cursor-pointer rounded-sm p-1 min-w-24 flex justify-center transition ease ${currentTab === 'complete' ? 'bg-white shadow-md' : 'hover:bg-slate-200'}`}
      >
        Complete
      </li>
    </ul>
  );
}