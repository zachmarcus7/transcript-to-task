"use client";

import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

export default function ButtonSecondary({
  text,
  onClick,
  disabled = false,
  loading = false,
  signOutIcon = false
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  signOutIcon?: boolean;
}) {
  const handleClick = () => {
    if (!disabled) onClick();
  }

  return (
    <button
      onClick={handleClick}
      className={`
        relative
        rounded-full
        font-bold 
        hover:bg-slate-200
        transition-all ease
        flex
        justify-center
        items-center
        border
        border-slate-300
        lg:w-48
        lg:h-10
        ${(disabled || loading) ? 'cursor-not-allowed bg-purpleish-600' : 'cursor-pointer'}
      `}
    >
      {signOutIcon && 
        <ArrowRightEndOnRectangleIcon 
          height={17.5} 
          width={17.5}
          className="text-slate-500 absolute left-8 top-[0.7rem]"
        />
      }

      {!loading &&<span className="text-slate-700 text-base">{text}</span>}

      {loading && <div className="loader-circle"></div>}
    </button>
  );
}