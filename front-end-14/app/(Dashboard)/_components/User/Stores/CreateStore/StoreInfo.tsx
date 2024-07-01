"use client";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { ProfileDialog } from "./ProfileDialog";
import { StoreAdressDialog } from "./StoreAdressDialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function StoreInfo() {
  const [stores, setStores] = useState<
     any
  >();
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
  const [reDirect, setReDirect] = useState(false);
  // const router = useRouter();


  const pathname = usePathname();
  // const [storeName, setStoreName] = useState("");

  // useEffect(() => {
  //   if (pathname.includes("/stores/")) {
  //     const segments = pathname.split("/");
  //     const storeIndex = segments.indexOf("stores");
  //     if (storeIndex !== -1 && segments[storeIndex + 1]) {
  //       let storeSegment = segments[storeIndex + 1];

  //       // Replace %20 with space
  //       if (storeSegment.includes("%20")) {
  //         storeSegment = storeSegment.replace(/%20/g, " ");
  //         setStores(storeSegment);
  //         dispatch(changeState(storeSegment)); // assuming changeState is an action creator
  //       } else {
  //         setStores(storeSegment);
  //         dispatch(changeState(storeSegment)); // assuming changeState is an action creator
  //       }
  //     }
  //   }
  // }, [pathname, dispatch]);

  // useEffect(() => {
  //   const fetchStores = async () => {
  //     setWaiting(true);
  //     try {
  //       const storesInfo = await getSpecificStore(dashState);
  //       if (storesInfo) {
  //         setStores(storesInfo);

  //         // Update the storeDetails state with the values from storesInfo
  //         setStoreDetails({
  //           storeName: storesInfo.storeName,
  //           storeAddress: storesInfo.storeAddress,
  //           storeEmail: storesInfo.storeEmail,
  //           storePhone: storesInfo.storePhone,
  //           storeCity: storesInfo.storeCity,
  //           storePostCode: storesInfo.storePostCode,
  //           storeBusinessName: storesInfo.storeBusinessName,
  //         });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setWaiting(false);
  //   };

  //   fetchStores();
  // }, [dashState]);

  const businessInfo = [
    {
      title: "Store name",
      emoji: <MdStorefront />,
      value: storeDetails.storeName,
    },
    {
      title: "Store phone",
      emoji: <FiPhone />,
      value: storeDetails.storePhone,
    },
    {
      title: "store email",
      emoji: <MdOutlineEmail />,
      value: storeDetails.storeEmail,
    },
    {
      title: "Business adress",
      emoji: <MdLocationOn />,
      value: storeDetails.storeCity,
    },
  ];
  return (
    <div className="border relative h-full p-4 rounded text-sm">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-primary">Profile</h1>
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
                    info.title === "Business adress"
                      ? "absolute right-0 top-0 text-xl cursor-pointer text-muted-foreground hover:text-primary"
                      : "hidden"
                  }
                >
                  <StoreAdressDialog storeDetails={storeDetails} />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button

        variant="destructive"
        className="absolute bottom-2 font-bold right-2"
      >
        Delete store
      </Button>
    </div>
  );
}
