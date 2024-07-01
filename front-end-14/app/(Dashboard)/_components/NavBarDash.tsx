import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Link from "next/link";
import ProfileDialog from "@/components/NavBar/ProfileDialog";

export default function NavBarDash() {
  return (
    <div className="bg-black shadow-md px-10 py-7 h-10 w-full text-background flex justify-between">
      <div className="flex xl:text-2xl text-2xl items-center cursor-pointer">
        <Link href="/">Matjarify Stores</Link>
      </div>
      <div className=" flex items-center  gap-4">
        <IoNotificationsOutline className="text-lg hover:text-gray-500  transition duration-150 cursor-pointer" />
        <ProfileDialog />
      </div>
    </div>
  );
}