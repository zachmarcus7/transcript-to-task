import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Transcript To Task",
  description: "Web app where users can upload meeting notes or transcripts, which are parsed using Groq AI to generate tasks that can be assigned to projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}