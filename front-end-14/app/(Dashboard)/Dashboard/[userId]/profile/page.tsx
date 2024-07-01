import React from "react";
import DashHeading from "@/components/User/MiniLayout/DashHeading";
import WelcomeToDash from "@/components/User/Profile/WelcomeToDash";

function Page({ params }: { params: { userId: string } }) {
  const page = "Profile";
  return (
    <div className="flex flex-col h-full flex-grow px-20">
      <DashHeading page={page} />
      <WelcomeToDash/>
    </div>
  );
}

export default Page;
