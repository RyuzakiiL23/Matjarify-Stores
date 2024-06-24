"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the effect when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
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
            open ? "h-full overflow-auto " : " delay-150 h-0"
          } transition-all  duration-300 ease-out flex flex-col justify-between fixed top-14 left-0 z-50`}
        >
          <div className={`flex flex-col gap-4 p-4`}>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.075s]`}
            >
              Trending
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.1s]`}
            >
              Popular
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.125s]`}
            >
              New
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.15s]`}
            >
              All
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.175s]`}
            >
              Blogs
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.2s]`}
            >
              Support
            </p>
            <p
              className={` ${
                open ? "ml-0" : "ml-[-100]"
              } font-bold cursor-pointer w-max transition-all duration-[0.225s]`}
            >
              Templates
            </p>
          </div>
          <div className={`${open ? "ml-0" : "ml-[-400] md:ml-[-1000]"} duration-300 p-4 pb-10`}>
            <div className="flex flex-col md:relative md:flex-row-reverse">
              <ul className="md:w-1/3">
                <div
                  className={`flex h-10 w-full gap-8 mt-10 md:mt-8 text-primary `}
                >
                  <FaGithub
                    className={` cursor-pointer hover:opacity-50 transition-all duration-300 text-xl `}
                  />
                  <FaInstagram className="cursor-pointer hover:opacity-50 transition-all duration-300 text-xl" />
                  <FaXTwitter className="cursor-pointer hover:opacity-50 transition-all duration-300 text-xl" />
                </div>
              </ul>
              <ul className="flex flex-col text-trdbackground text-sm md:w-2/3">
                <li
                  className={`ulli border-b  mr-auto border-gray-700 text-sm mt-8 font-medium cursor-pointer `}
                >
                  307 Riad Al Ismailia Anasi, Meknes 50050
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row md:relative md:items-center">
              <ul className="flex text-sm gap-8 text-gray-500 md:w-2/3">
                <li className="ulli border-b border-border text-sm md:mt-0 mt-8 cursor-pointer">
                  <Link href={"/privacy"}>Privacy</Link>{" "}
                </li>
                <li className="ulli border-b border-border text-sm md:mt-0 mt-8 cursor-pointer">
                  <Link href={"/politics"}>Politics</Link>
                </li>
                <li className="ulli border-b border-border text-sm md:mt-0 mt-8 cursor-pointer">
                  <Link href={"/terms"}>Terms</Link>
                </li>
              </ul>
              <div className="py-6 md:w-1/3 flex items-center gap-2">
                <p className="text-gray-500 text-sm font-bold ">Powered by </p>
                <Link
                  href={"https://matjarify.vercel.app"}
                  target="_blank"
                  className="flex gap-2 hover:opacity-80 duration-150 ease-in-out"
                >
                  <div className="rounded-full bg-primary p-0.5">
                    <Image
                      src="/logo-no-bg.png"
                      width={20}
                      height={20}
                      alt="M"
                    />
                  </div>
                  <p className="text-primary text-md font-bold">Matjarify</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
