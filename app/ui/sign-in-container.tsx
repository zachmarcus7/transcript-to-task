"use client";

import { useState } from "react";
import SignInForm from "@/app/ui/sign-in-form";
import CreateAccountForm from "@/app/ui/create-account-form";

export default function SignInContainer() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <>
      {showSignIn 
        ? <SignInForm handleCreateSwitch={() => {setShowSignIn(false)}} /> 
        : <CreateAccountForm handleSignInSwitch={() => {setShowSignIn(true)}} /> 
      }
    </>
  );
}
