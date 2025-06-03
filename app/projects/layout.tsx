import Navbar from "@/app/ui/navbar/navbar";

export default function Layout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="h-screen md:overflow-hidden w-full flex flex-col items-center">
      <Navbar />
      <div className="flex-grow md:overflow-y-auto w-full max-w-[1600px] pt-6 px-8 2-5xl:px-0">
        {children}
      </div>
    </div>
  );
}