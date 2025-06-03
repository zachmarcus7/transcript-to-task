"use client";

import { redirect } from 'next/navigation';
import { BookmarkIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import ButtonPrimary from '@/app/ui/button-primary';
import ButtonSecondary from '@/app/ui/button-secondary';
import DropdownMenu from '@/app/ui/dropdown-menu';
import { MenuItem } from '@/app/lib/types';

export default function OverviewHeader({
  displayActive
}: {
  displayActive: boolean;
}) {
  const redirectString = displayActive ? '/overview/projects/archived' : '/overview/projects';
  const icon = displayActive ? <BookmarkIcon height={15} width={15} /> : <CheckBadgeIcon height={20} width={20} />;

  const menuItems: MenuItem[] = [
    { icon: icon, label: (displayActive) ? 'Show Archived' : 'Show Active', onClick: () => { redirect(redirectString) } }
  ];

  return (
    <div className="flex justify-between items-start">

      <div className="flex gap-4 items-center mb-8">

        <h5 className="font-sp text-4xl font-bold text-slate-700">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Username's</span> Projects
        </h5>

        <div className="h-10 flex justify-end items-end">
          <DropdownMenu
            toggle={<ButtonSecondary
              text={displayActive ? 'Active' : 'Archived'}
              onClick={() => { }}
              small={true}
              downIcon={true}
            />}
            items={menuItems}
          />
        </div>

      </div>

      {displayActive &&
        <div className="flex gap-4">

          <ButtonPrimary
            text="Convert"
            onClick={() => { redirect("/overview/projects/convert") }}
            uploadIcon={true}
          ></ButtonPrimary>

          <ButtonPrimary
            text="Create"
            onClick={() => { redirect("/overview/projects/create") }}
            addIcon={true}
          ></ButtonPrimary>

        </div>
      }

    </div>
  );
}