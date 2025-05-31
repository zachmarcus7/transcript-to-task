'use client';

import { useState, useRef, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { EllipsisVerticalIcon, PencilIcon, BookmarkIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function ProjectOverviewMenu({
  projectId
}: {
  projectId: number;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>

      <EllipsisVerticalIcon
        onClick={() => setOpen(!open)}
        height={25}
        width={25}
        className="text-slate-400 cursor-pointer transition ease hover:bg-slate-200 rounded-full"
      />

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-100 shadow-2xl z-10 overflow-hidden">

          <button
            className="flex gap-3 text-sm text-slate-500 font-medium w-full text-left p-3 transition ease cursor-pointer hover:bg-gray-100"
            type="button"
            onClick={() => { redirect(`/overview/projects/${projectId}/tasks/create`) }}
          >
            <PlusIcon height={20} width={20} />
            <span>Add New Task</span>
          </button>

          <button
            className="flex gap-3 text-sm text-slate-500 font-medium w-full text-left p-3 transition ease cursor-pointer hover:bg-gray-100"
            type="button"
            onClick={() => { redirect(`/overview/projects/${projectId}/edit`) }}
          >
            <PencilIcon height={20} width={20} />
            <span>Edit Details</span>
          </button>

          <button
            className="flex gap-3 text-sm text-slate-500 font-medium w-full text-left p-3 transition ease cursor-pointer hover:bg-gray-100"
            type="button"
            onClick={() => { }}
          >
            <BookmarkIcon height={20} width={20} />
            <span>Archive Project</span>
          </button>

        </div>
      )}
    </div>
  );
}