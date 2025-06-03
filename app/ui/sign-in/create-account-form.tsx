"use client";

import Image from "next/image";
import { redirect } from 'next/navigation';
import ButtonPrimary from '@/app/ui/button-primary';

export default function CreateAccountForm({
  handleSignInSwitch
}: {
  handleSignInSwitch: () => void
}) {
  return (
    <>
      <div className="md:w-[650px]">
        <div className="w-full flex justify-center items-center mb-4">

          <div className="relative flex justify-center items-center">
            <div className="absolute bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl h-[50px] w-[50px] z-1"></div>
            <Image
              src="/logo.svg"
              alt="App Logo"
              height={35}
              width={35}
              className="z-10"
            ></Image>
          </div>

        </div>
        <h5 className="font-sp text-4xl mb-8 font-bold text-center text-slate-700">Create New Account</h5>
        <p className="text-slate-400 text-xl font-normal text-center">Please enter your new account details below.</p>
      </div>

      <input
        className="w-full bg-white h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
        placeholder="Email Address"
      ></input>

      <input
        className="w-full bg-white h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
        placeholder="Password"
      ></input>

      <input
        className="w-full bg-white h-12 md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
        placeholder="Verify Password"
      ></input>

      <div className="mt-10 w-full flex justify-center items-center">
        <ButtonPrimary 
          text="Create Account" 
          onClick={() => { redirect("/projects") }}
          large={true}
        />
      </div>

      <div className="md:w-[650px]">
        <p className="text-slate-400 text-xl font-normal text-center cursor-pointer" onClick={handleSignInSwitch}>Use Existing Acount</p>
      </div>
    </>
  );
}