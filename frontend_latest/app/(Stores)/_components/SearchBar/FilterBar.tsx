import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";
import { TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from "react-icons/tfi";

export default function FilterBar() {
  const filters = [
    {
      name: "Category",
    },
    {
      name: "Popularity",
    },
    {
      name: "Store Size",
    },
    {
      name: "Trending",
    },
    {
      name: "Oldest",
    },
    {
      name: "City",
    },
  ];
  return (
    <div className="pt-20">
      <div className="flex lg:flex-row flex-col bg-input items-center text-primary mx-4 md:mx-14 rounded-lg px-1 lg:px-14">
        <ul className="grid grid-cols-2 lg:flex w-full p-2 gap-2">
          {filters.map((item, index) => (
            <li
              key={index}
              className="relative text-sm bg-background text-md font-semibold rounded-lg p-3 pr-5 w-full"
            >
              <p className="relative w-max ">
                {item.name}
                <FaAngleDown className="absolute font-light right-[-17] h-3 top-[5]" />
              </p>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-2 lg:flex lg:justify-end w-full p-2 gap-2">
          <li className="bg-background flex justify-center text-sm font-semibold rounded-lg p-3 w-full lg:w-12 text-center">
            <p className="w-6 rounded-full bg-[#dc835c]">2</p>
          </li>
          <li className="bg-background text-sm font-semibold rounded-lg p-3 w-full lg:w-28">
            <p className="relative w-max">
              Reset filter
              <RxReset className="absolute right-[-20] h-5 top-[0]" />
            </p>
          </li>
        </ul>
      </div>
      <div className="flex my-6 w-full justify-between items-center md:px-12">
        <div className="px-4 flex gap-4 text-primary">
          <p className="font-light">
            Storers{" "}
            <span className="font-normal text-[10px] px-1 border border-primary rounded-sm text-trdbackground">
              729
            </span>
          </p>
          <h1 className="font-bold">
            Filter{" "}
            <span className="text-[10px] px-1 border border-primary rounded-sm text-trdbackground">
              45
            </span>
          </h1>
        </div>
        <div className="flex pr-4 gap-2 text-trdbackground items-center">
          <TfiLayoutGrid3Alt className="w-6 h-6" />
          <TfiLayoutGrid4Alt className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}
