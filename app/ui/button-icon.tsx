"use client";

import { PencilIcon, BookmarkIcon, PlusIcon } from '@heroicons/react/24/outline';
import TooltipContainer from '@/app/ui/tooltip';

export default function ButtonIcon({
  onClick,
  editIcon = false,
  bookmarkIcon = false,
  addIcon = false,
  tooltip
}: {
  onClick: () => void;
  editIcon?: boolean;
  bookmarkIcon?: boolean;
  addIcon?: boolean;
  tooltip?: string;
}) {
  return (
    <TooltipContainer message={tooltip}>
      <button
        onClick={() => { onClick() }}
        className={`
        relative
        rounded-full
        bg-slate-200
        hover:bg-slate-100
        transition-all 
        ease
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

        {bookmarkIcon &&
          <BookmarkIcon
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
    </TooltipContainer>
  );
}