"use client";
import React from "react";
import Link from "next/link";
import { HeadersCollections } from "../Headers/HeadersCollections";
import CartSheet from "./CartSheet";
import { useParams } from "next/navigation";

export default function NavBar() {
  const params = useParams<{ store_id: "string" }>();
  return (
    <div className="flex items-center justify-between border-b border-opacity-30 h-20 px-10 backdrop-blur-lg z-50 sticky w-full top-0 shadow-sm">
      <div className="cursor-pointer">
        <Link href={`/${params.store_id}`}>{params.store_id}</Link>
      </div>
      <div className="">
        <HeadersCollections />
      </div>
      <div className="flex gap-4 items-center">
        <CartSheet />
        {/* <User />
        <DarkLightToggle /> */}
      </div>
    </div>
  );
}
