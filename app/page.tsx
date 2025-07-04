import Image from 'next/image';
import SignInForm from '@/app/ui/sign-in/sign-in-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex grow flex-col lg:flex-row">

        {/* Image Section */}
        <section className="h-screen p-4 relative flex items-center justify-center lg:w-2/5">
          <Image
            src="/landing-page-bg.jpg"
            alt="landing page design"
            fill
            className="object-cover"
          />
          <div className="absolute w-full h-full landing-gradient opacity-60 z-40"></div>
          <div className="w-full h-full z-60 flex flex-col justify-center items-center">
            <div className="md:px-20">
              <h4 className="font-sp text-4xl text-white mb-4 lg:mb-8 font-semibold lg:text-5xl 2xl:text-6xl 3xl:text-7xl">
                <span className="block">Convert Meeting</span>
                <span className="block">Notes Into</span>
                <span className="block">Actionable Tasks</span>
              </h4>
              <p className="text-slate-100 font-normal text-base 3xl:text-xl ">
                <span className="block">With Transcript To Task, you can integrate AI task parsing into your workflow.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="flex flex-col justify-center items-center gap-6 bg-slate-50 px-6 py-10 md:w-3/5 md:px-20">
          <SignInForm />
        </section>

      </div>
    </main>
  );
}