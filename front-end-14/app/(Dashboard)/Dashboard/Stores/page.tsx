'use client';
import React from "react";
import useCurrentPath from "../../_hooks/useCurrentPath";

function Page() {
const path = useCurrentPath();
  return (
    <div className="flex flex-col h-full flex-grow px-20">
      <div className="h-24 w-full flex justify-between items-end p-2 my-6">
        <h1 className="text-2xl font-bold">{path}</h1>
        <div className="flex">
          <h2 className="text-gray-700 font-bold">
            {path === "Dashboard" ? "" : "Dashboard/"}
          </h2>
          <h2 className="text-blue-700 font-bold">{path}</h2>
        </div>
      </div>
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
          <h1 className="text-2xl text-primary font-bold">
            Welcome to your stores dashboard !
          </h1>
          <h2 className="text-2xl text-secondary-foreground">Create your store</h2>
        </div>
      </div>
    </div>
  );
}

export default Page;
