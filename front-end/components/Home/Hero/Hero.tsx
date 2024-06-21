import React from "react";
import { FaStar } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="bg-secbackground cursor-pointer w-full h-fit  relative">
      <div className="pt-20 flex gap-4 items-center text-primary justify-center">
        <p>Site of the Day</p>
        <p className=" border-border border font-semibold rounded px-2">
          Jun 20, 2024
        </p>
        <div className="flex items-center text-trdbackground ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p className="ml-2 text-sm">5.0/5</p>
        </div>
      </div>

      <h1 className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary text-center mt-6 mb-6">
        Store Title
      </h1>

      <div className="flex items-center text-2xl md:mb-10 justify-center mt-4 gap-4 group">
        <div className="flex  justify-center items-center text-white font-extrabold rounded-full bg-trdbackground w-9 h-9">
          S
        </div>
        <div className="relative">
          <p className="hidden md:flex font-bold text-primary border-b-2 border-border">
            Store Name
          </p>
          <div className="border-t border-2 group-hover:w-full duration-300 ease-out border-trdbackground w-0 bottom-0 absolute"></div>
        </div>
      </div>

      <div className="w-full p-4 xs:p-0 lg:p-4 mt-8">
        <div className="w-full lg:rounded-lg border h-80 xs:h-[66vh] text-center font-bold text-5xl py-40 bg-secondary">
          Store Image Cover Goes Here
        </div>
      </div>
    </div>
  );
}
