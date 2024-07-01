"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "@/public/logo.svg";

function ProfileInput() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <div className="flex flex-col gap-4 bg-background p-4 shadow-md h-full mb-20">
      <div className="w-full flex flex-col justify-center items-center">
        <Image
          src={session ? session.user?.image : logo}
          width={130}
          height={120}
          alt="User"
          className={`rounded`}
        />
        <h2>{session?.user?.name}</h2>
      </div>
    </div>
  );
}
export default ProfileInput;
