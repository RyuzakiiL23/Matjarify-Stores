"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";

function WelcomeToDash() {
  return (
    <div className="flex flex-col gap-4 bg-background h-full mb-20 shadow-md p-20">
      {/* <div className="w-full flex flex-col gap-20 justify-center items-center">
        <Image
          src={session ? session.user?.image : logo}
          width={130}
          height={120}
          style={{width: 'auto'}}
          alt="User"
          className={`rounded`}
        /> */}
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-2xl text-primary font-bold">Welcome !</h1>
          <h2 className="text-2xl text-secondary-foreground">Name</h2>
        </div>
      </div>
  );
}
export default WelcomeToDash;
