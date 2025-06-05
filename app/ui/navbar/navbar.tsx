import { signOut } from '@/auth';
import ButtonSecondary from '@/app/ui/button-secondary';
import NavbarLogo from '@/app/ui/navbar/navbar-logo';

export default function Navbar() {
  return (
    <div className="w-full flex justify-center shadow-sm bg-white py-6 pb-4 mb-2">
      <div className="w-full max-w-[1600px] flex justify-between items-center px-8 2-5xl:pl-2 2-5xl:pr-0">

        {/* Left Portion */}
        <div className="flex">
          <div className="relative flex justify-center items-center">
            <div className="absolute bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl h-[50px] w-[50px] z-1"></div>
            <NavbarLogo />
          </div>
          <h5 className="font-sp text-xl text-slate-700 ml-4 font-bold text-center leading-loose">Transcript To Task</h5>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-3">
          <ButtonSecondary
            signOutIcon={true}
            text="Sign out"
            onClick={async () => {
              'use server';
              await signOut();
            }}
          />
        </div>

      </div>
    </div>
  );
}