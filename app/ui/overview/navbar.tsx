"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import ButtonSecondary from '@/app/ui/button-secondary';

export default function Navbar() {
  return (
    <div className="w-full flex justify-center shadow-sm bg-white py-6 pb-4 mb-2">
      <div className="w-full max-w-[1728px] flex justify-between items-center px-8 2-5xl:pl-2 2-5xl:pr-0">

        {/* Left Portion */}
        <div className="flex">
          <div className="relative flex justify-center items-center">
            <div className="absolute bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl h-[50px] w-[50px] z-1"></div>
            <Image
              src="/logo.svg"
              alt="App Logo"
              height={40}
              width={40}
              className="z-10"
            ></Image>
          </div>
          <h5 className="font-sp text-xl text-slate-700 ml-4 font-bold text-center leading-loose">Transcript To Task</h5>
        </div>

        {/* Right Links */}
        <div className="flex gap-5">

          <ButtonSecondary
            text="Sign out"
            onClick={() => { redirect("/") }}
            signOutIcon={true}
          ></ButtonSecondary>

        </div>

      </div>
    </div>
  );
}