"use client";

import { PencilIcon, ArchiveBoxXMarkIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function ButtonIcon({
  onClick,
  editIcon = false,
  deleteIcon = false,
  addIcon = false
}: {
  onClick: () => void;
  editIcon?: boolean;
  deleteIcon?: boolean;
  addIcon?: boolean;
}) {
  return (
    <button
      onClick={() => {onClick()}}
      className={`
        relative
        rounded-full
        bg-slate-200
        hover:bg-slate-100
        transition-all ease
        flex
        justify-center
        items-center
        lg:w-10
        lg:h-10
        cursor-pointer
      `}
    >

      {editIcon && 
        <PencilIcon 
          height={17.5} 
          width={17.5}
          className="text-slate-500"
        />
      }

      {deleteIcon && 
        <ArchiveBoxXMarkIcon
          height={17.5} 
          width={17.5}
          className="text-slate-500"
        />
      }

      {addIcon && 
        <PlusIcon
          height={17.5} 
          width={17.5}
          className="text-slate-500"
        />
      }

    </button>
  );
}