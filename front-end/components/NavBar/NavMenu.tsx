'use client'
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Clean up the effect when the component is unmounted
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <div>
      <FaBars
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-xl"
      />
      <div className={`absolute top-20 left-0 w-full h-full z-50`}>
        <div
          className={`bg-secbackground w-screen ${
            open ? "h-screen overflow-hidden" : "h-0"
          } overflow-hidden transition-all duration-500 ease-out fixed top-14 left-0 z-50`}
        >
          <div className="flex flex-col gap-4 p-4">
            <p className="font-bold cursor-pointer w-max">Trending</p>
            <p className="font-bold cursor-pointer w-max">Popular</p>
            <p className="font-bold cursor-pointer w-max">New</p>
            <p className="font-bold cursor-pointer w-max">All</p>
            <p className="font-bold cursor-pointer w-max">Blogs</p>
            <p className="font-bold cursor-pointer w-max">Templates</p>
            <p className="font-bold cursor-pointer w-max">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

