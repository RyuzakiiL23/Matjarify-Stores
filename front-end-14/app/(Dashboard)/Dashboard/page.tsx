import React from "react";
import DashHeading from "../_components/User/MiniLayout/DashHeading";
import WelcomeToDash from "../_components/User/Profile/WelcomeToDash";

function Page() {
  const page = "Dashboard";
  return (
    <div className="flex flex-col h-full flex-grow px-20">
      <DashHeading />
      <WelcomeToDash />
    </div>
  );
}

export default Page;
