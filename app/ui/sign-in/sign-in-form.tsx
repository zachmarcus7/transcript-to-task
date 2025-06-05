"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions/authenticate";
import Image from "next/image";
import ButtonPrimary from '@/app/ui/button-primary';

export default function SignInForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction}>
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
        <h5 className="font-sp text-4xl mb-8 font-bold text-center text-slate-700">Sign in to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transcript To Task</span></h5>
        <p className="text-slate-400 text-xl font-normal text-center">Please enter your details below to use the app.</p>
      </div>

      <div className="flex flex-col items-center w-full mt-8">

        <input
          className="w-full h-12 bg-white md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
          placeholder="Username"
          name="username"
        ></input>

        <input
          className="w-full h-12 mt-4 bg-white md:w-[500px] border border-slate-200 rounded-xl pl-5 placeholder:text-slate-300 focus:outline-none focus:border-purpleish-600"
          placeholder="Password"
          name="password"
        ></input>

      </div>

      <div className="mt-10 w-full flex justify-center items-center">
        <ButtonPrimary
          text="Sign In"
          onClick={() => { }}
          large={true}
          isSubmit={true}
        />
      </div>

    </form>
  );
}