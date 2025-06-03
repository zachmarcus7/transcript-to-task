'use client';

import { redirect } from 'next/navigation';
import { EllipsisVerticalIcon, PencilIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import DropdownMenu from '@/app/ui/dropdown-menu';
import { MenuItem } from '@/app/lib/types';
import { archiveProject } from '@/app/lib/actions/projects';

export default function ProjectPreviewMenu({
  projectId
}: {
  projectId: number;
}) {
  const handleEdit = () => {
    redirect(`/overview/projects/${projectId}/edit`)
  }

  const handleArchive = () => {
    archiveProject(projectId);
  }

  const menuItems: MenuItem[] = [
    { icon: <PencilIcon height={15} width={15} />, label: 'Edit Project', onClick: handleEdit },
    { icon: <BookmarkIcon height={15} width={15} />, label: 'Archive Project', onClick: handleArchive }
  ];

  return (
    <DropdownMenu
      toggle={<EllipsisVerticalIcon
        height={25}
        width={25}
        className="text-slate-400 cursor-pointer transition ease hover:bg-slate-200 rounded-full"
      />}
      items={menuItems}
    />
  );
}