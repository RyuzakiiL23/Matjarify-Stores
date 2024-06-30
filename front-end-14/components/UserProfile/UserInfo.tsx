"use client";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { ProfileDialog } from "./ProfileDialog";
import { UserAdressDialog } from "./UserAdressDialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function UserInfo() {

  const [waiting, setWaiting] = useState(false);
  const [storeDetails, setStoreDetails] = useState<{
    storeName: string;
    storeAddress: string;
    storeEmail: string;
    storePhone: string;
    storeCity: string;
    storePostCode: string;
    storeBusinessName: string;
  }>({
    storeName: "",
    storeAddress: "",
    storeEmail: "",
    storePhone: "",
    storeCity: "",
    storePostCode: "",
    storeBusinessName: "",
  });

  const businessInfo = [
    {
      title: "Name",
      emoji: <MdStorefront />,
      value: storeDetails.storeName,
    },
    {
      title: "Phone",
      emoji: <FiPhone />,
      value: storeDetails.storePhone,
    },
    {
      title: "Email",
      emoji: <MdOutlineEmail />,
      value: storeDetails.storeEmail,
    },
    {
      title: "Address",
      emoji: <MdLocationOn />,
      value: storeDetails.storeCity,
    },
  ];
  return (
    <div className="border relative h-full p-4 rounded text-sm">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-primary">Your Informations</h1>
        <ProfileDialog storeDetails={storeDetails} />
      </div>
      {businessInfo.map((info, index) => (
        <div key={index}>
          <div className="relative w-full border-b p-1"></div>
          <div className="flex w-full items-center gap-2 py-2">
            <h3 className="w-8 text-muted-foreground text-lg">{info.emoji}</h3>
            <div className="relative w-full">
              <h2 className="text-muted-foreground font-bold">{info.title}</h2>
              <div className=" flex justify-between w-full">
                <span className="text-secondary-foreground font-bold">
                  {waiting ? "loading ..." : info.value}
                </span>
                <span
                  className={
                    info.title === "Address"
                      ? "absolute right-0 top-0 text-xl cursor-pointer text-muted-foreground hover:text-primary"
                      : "hidden"
                  }
                >
                  <UserAdressDialog storeDetails={storeDetails} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Button
        variant="destructive"
        className="absolute top-20 bottom-2 font-bold right-2"
      >
        Delete store
      </Button> */}
    </div>
  );
}
