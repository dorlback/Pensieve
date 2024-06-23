'use client';

import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MobileNavBar from "@/components/MobileNavBar";
import AuthContext from "./context/AuthContext";
import { useSession } from "next-auth/react";
import { metadata } from './metadata'; // Import metadata
import { RiLoaderFill } from "react-icons/ri";

function CheckIsLoading({ children }: { children: React.ReactNode; }) {
  const { data: session, status } = useSession();

  return (
    <>{status === 'loading' ?
      <div className='h-[calc(100%)] w-[calc(100%)] flex justify-center items-center text-5xl text-base'>
        <RiLoaderFill className="text-5xl animate-spin duration-300 " />
      </div>
      :
      <>{children}</>}</>
  )
}

const sansKr = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className={sansKr.className}>
        <AuthContext>
          <div className="absolute z-50" id="modal-root" />
          <div className="absolute z-50" id="offcanvas-root" />
          <div className="flex flex-col w-full h-[calc(100vh)] overflow-hidden">
            <NavBar />
            <div className="flex-1 w-full overflow-auto">
              <CheckIsLoading>
                {children}
              </CheckIsLoading>
            </div>
            <MobileNavBar />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
