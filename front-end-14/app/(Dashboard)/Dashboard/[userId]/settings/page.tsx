"use client";
import { useState } from "react";
import DashHeading from "@/components/User/MiniLayout/DashHeading";
import ProtectedRoutes from "@/hooks/ProtectedRoutes";
import Wave from "@/components/Wave";

function Page({ params }: { params: { userId: string } }) {
  const [waveComponent, setWaveComponent] = useState(false);
  if (!ProtectedRoutes()) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl">You Need to Login to access this page</h1>
        <button onClick={() => setWaveComponent(true)}>LogIn</button>
        <div className={!waveComponent ? 'hidden' : ''}>
          <Wave setOpen={setWaveComponent}/>
        </div>
      </div>
    );
  }
  const page = "Settings";
  return (
    <div className=" px-20 h-full flex flex-col flex-grow bg-red">
      <DashHeading page={page} />
      <div className=" bg-background h-full mb-20  p-4 shadow-md">Settings</div>
    </div>
  );
}

export default Page;
