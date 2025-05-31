"use client";

import { redirect } from 'next/navigation';
import ButtonPrimary from '@/app/ui/button-primary';

export default function OverviewHeader() {
  return (
    <div className="flex justify-between items-start">
      <h5 className="font-sp text-4xl mb-8 font-bold text-slate-700">Welcome, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Username</span></h5>
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
    </div>
  );
}