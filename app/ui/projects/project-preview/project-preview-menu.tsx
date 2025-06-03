'use client';

import { redirect } from 'next/navigation';
import { EllipsisVerticalIcon, PencilIcon, BookmarkIcon, CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/outline';
import DropdownMenu from '@/app/ui/dropdown-menu';
import { MenuItem } from '@/app/lib/types';
import { archiveProject, activateProject, deleteProject } from '@/app/lib/actions/projects';

export default function ProjectPreviewMenu({
  projectId,
  displayArchiveMenu
}: {
  projectId: number;
  displayArchiveMenu: boolean;
}) {
  const handleEdit = () => {
    redirect(`/projects/${projectId}/edit`);
  }

  const handleArchive = () => {
    archiveProject(projectId);
  }

  const handleActivate = () => {
    activateProject(projectId);
  }

  const handleDelete = () => {
    deleteProject(projectId);
  }

  let menuItems: MenuItem[] = [
    { icon: <PencilIcon height={20} width={20} />, label: 'Edit Project', onClick: handleEdit },
    { icon: <BookmarkIcon height={20} width={20} />, label: 'Archive Project', onClick: handleArchive }
  ];

  if (displayArchiveMenu) {
    menuItems = [
      { icon: <CheckBadgeIcon height={20} width={20} />, label: 'Activate Project', onClick: handleActivate },
      { icon: <XCircleIcon height={20} width={20} />, label: 'Delete Project', onClick: handleDelete }
    ];
  }

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