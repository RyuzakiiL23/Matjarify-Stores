"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Footer() {
  const pathname = usePathname();
  if (pathname.includes("contact")) {
    return null; // Hide the footer if the user is on the /contact page
  }
  return (
    <div className="bg-secbackground xl:px-28 px-6 md:pr-16">
      <div className="flex flex-col md:flex-row md:relative ">
        <ul className="flex flex-col mb-14 md:w-2/3">
          <div
            className={`text-4xl md:text-6xl mt-10 text-primary font-extrabold `}
          >
            Matjarify Store
          </div>
        </ul>
        <ul
          className={`flex flex-col font-semibold text-primary gap-2 text-sm md:text-lg md:mt-10 md:w-1/3`}
        >
          <li className={`cursor-pointer hover:opacity-70 duration-200 `}>
            <Link href="/">Home</Link>
          </li>
          <li className={`cursor-pointer hover:opacity-70 duration-200 `}>
            <Link href="/services">Trending </Link>
          </li>
          <li className={`cursor-pointer hover:opacity-70 duration-200 `}>
            <Link href="/pricing">Popular </Link>
          </li>
          <li className={`cursor-pointer hover:opacity-70 duration-200 `}>
            <Link href="/about">New </Link>
          </li>
          <li className={`cursor-pointer hover:opacity-70 duration-200 `}>
            <Link href="/contact">All </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:relative md:flex-row-reverse">
        <ul className="md:w-1/3">
          <div className={`flex h-10 w-full gap-8 mt-10 md:mt-8 text-primary `}>
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
          <Link href={'https://matjarify.vercel.app'} target="_blank" className="flex gap-2 hover:opacity-80 duration-150 ease-in-out">
          <div className="rounded-full bg-primary p-0.5">
            <Image src="/logo-no-bg.png" width={20} height={20} alt="M" />
          </div>
          <p className="text-primary text-md font-bold">Matjarify</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
