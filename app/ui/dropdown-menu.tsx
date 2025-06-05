'use client';

import { useState, useRef, useEffect } from "react";
import { MenuItem } from "@/app/lib/types";

export default function DropdownMenu({
  toggle,
  items
}: {
  toggle: React.ReactNode;
  items: MenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /**
   * Closes the menu when a click occurs outside of the 
   * menu element.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>

      {/* Toggle for dropdown menu */}
      <div onClick={() => setOpen(!open)}>
        {toggle}
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-slate-100 shadow-2xl z-10 overflow-hidden">

          {items.map(item => (
            <button
              key={item.label}
              className="grid grid-cols-5 col-spantext-sm text-slate-500 font-medium w-full text-left p-3 transition ease cursor-pointer hover:bg-gray-100"
              type="button"
              onClick={() => { item.onClick() }}
            >
              <div className="flex items-center col-span-1">{item.icon}</div>
              <span className="col-span-4">{item.label}</span>
            </button>
          ))}

        </div>
      )}
    </div>
  );
}