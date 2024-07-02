import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import "../(Home)/globals.css";
import NavBarDash from "./_components/NavBarDash";
import SideBar from "./_components/SideBar";

// const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Matjarify",
    template: "Matjarify | %s",
  },
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="font-universal-sans relative flex min-h-screen">
        <div className="top-0 fixed w-full z-50 ">
            <NavBarDash />
        </div>
        <div className=" flex flex-grow h-screen w-full relative pt-6">
          <div className="top-8 w-64 left-0 h-full fixed z-49 overflow-auto bg-secbackground">
          <SideBar />
          </div>
          <div className=" bg-background h-full w-full ml-64">{children}</div>
        </div>
      </div>
  );
}