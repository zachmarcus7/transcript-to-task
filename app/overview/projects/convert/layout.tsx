import Navbar from "@/app/ui/overview/navbar";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}