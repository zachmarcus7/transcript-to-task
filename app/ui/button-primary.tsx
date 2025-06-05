"use client";

import { ArrowUpTrayIcon, PlusIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline';

export default function ButtonPrimary({
  text,
  onClick,
  disabled = false,
  loading = false,
  large = false,
  uploadIcon = false,
  addIcon = false,
  backIcon = false,
  isSubmit = false
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  large?: boolean;
  uploadIcon?: boolean;
  addIcon?: boolean;
  backIcon?: boolean;
  isSubmit?: boolean;
}) {
  const handleClick = () => {
    if (!disabled) onClick();
  }

  return (
    <button
      onClick={handleClick}
      type={isSubmit ? "submit" : "button"}
      className={`
        relative
        bg-purpleish-500
        rounded-full
        hover:bg-purpleish-600 
        transition-all ease
        flex
        justify-center
        items-center
        ${large ? 'lg:w-66 lg:h-14' : 'lg:w-48 lg:h-10'}
        ${(disabled || loading) ? 'cursor-not-allowed bg-purpleish-600' : 'cursor-pointer shadow-xl'}
      `}
    >
      {uploadIcon && 
        <ArrowUpTrayIcon 
          height={17.5} 
          width={17.5}
          className="text-white absolute left-8 top-[0.7rem]"
        />
      }

      {backIcon && 
        <ArrowLongLeftIcon
          height={17.5} 
          width={17.5}
          className="text-white absolute left-8 top-[0.7rem]"
        />
      }

      {addIcon && 
        <PlusIcon
          height={17.5} 
          width={17.5}
          className="text-white absolute left-8 top-[0.7rem]"
        />
      }

      {!loading &&
        <span className={`text-white ${large ? 'text-xl' : 'text-base'}`}>{text}</span>
      }

      {loading && <div className="loader-circle"></div>}
      
    </button>
  );
}