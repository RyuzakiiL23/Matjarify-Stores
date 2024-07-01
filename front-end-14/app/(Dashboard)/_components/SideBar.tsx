"use client";
import { FiHome, FiUsers } from "react-icons/fi";
import { MdPerson, MdStorefront } from "react-icons/md";
import {
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import type { RootState } from "@/lib/store";

import { use, useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import useCurrentPath from "../_hooks/useCurrentPath";

export default function SideBar() {
  const pathname = usePathname();
  const [storeName, setStoreName] = useState<string>("");


  const dashState = useCurrentPath();

  return (
    <div className="relative flex flex-col text-sm font-semibold justify-between p-4 h-full">
      <div className="flex flex-col gap-2">
        <div className="py-8">Dashboard</div>
        <Link
          href={"/Dashboard/Profile"}
          className={` flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2 ${
            dashState === "Profile"
              ? "bg-background "
              : "text-muted-foreground"
          }`}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </Link>
        {/* <Link href={`/${session?.user?.name}/stores`}> */}
        <div>
          <Link href={"/Dashboard/Stores"}
            className={` ${
              dashState === "Stores" ||
              dashState === "CreateStore" ||
              dashState === storeName
                ? "bg-background "
                : "text-muted-foreground"
            }  flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2`}
          >
            <MdStorefront className="mr-2 h-4 w-4" />
            <span className="flex justify-between">Stores </span>
          </Link>

          <div
            className={`transition-all bg-background duration-300 ease-in-out overflow-hidden ${
              dashState === "Stores" ||
              dashState === "CreateStore" ||
              dashState === storeName
                ? "h-auto max-h-96"
                : "max-h-0"
            }`}
          >
            <div>
              {/* {stores && stores.map((store) => (
                <Link
                  key={store._id}
                  onClick={() => {
                    dispatch(changeState((store as IStoreDocument).storeName)),
                      setStoreName((store as IStoreDocument).storeName);
                  }}
                  href={`/dashboard/${session?.user?.name}/stores/${(store as IStoreDocument).storeName}`}
                >
                  <button
                    className={` ${
                      dashState === (store as IStoreDocument).storeName
                        ? ""
                        : "text-muted-foreground"
                    } duration-300 ease-in-out  mt-2 ml-4 flex items-center hover:bg-gray-300 w-full justify-start py-2 mb-4`}
                  >
                    <MdStorefront className="mr-2 h-4 w-4" />
                    {(store as IStoreDocument).storeName}
                  </button>
                </Link>
              ))} */}
            </div>

            {/* <Link
              onClick={() => {dispatch(changeState("CreateStore"))}}
              href={`/dashboard/${session?.user?.name}/stores/createStore`}
            > */}
            <Link href={"/Dashboard/Stores/CreateStores"}
              className={` ${
                pathname === "Dashboard/Stores/CreateStores" ? "text-primary" : "text-trdbackground"
              } duration-300 ease-in-out  mt-2  flex items-center  w-full justify-start px-2 mb-4 relative`}
            >
              <div className="flex h-10 w-full items-center pl-4 hover:bg-secbackground">
              <MdStorefront className="mr-2 h-4 w-4" />
              Create Store
              </div>
            </Link>
            {/* </Link> */}
          </div>
        </div>
        {/* </Link> */}
        {/* <Link
          onClick={() => dispatch(changeState("Settings"))}
          href={`/dashboard/${session?.user?.name}/settings`}
        > */}
        <Link href={"/Dashboard/Clients"}
          className={` flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2 ${
            dashState === "Clients"
              ? "bg-background"
              : "text-muted-foreground"
          }`}
        >
          <FiUsers className="mr-2 h-4 w-4" />
          <span>Clients</span>
        </Link>
        {/* </Link> */}
        <Link href={"/Dashboard/Settings"}
          className={` flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2 ${
            dashState === "Settings"
              ? "bg-background  "
              : "text-muted-foreground"
          }`}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Link>
        <div
          className={`text-muted-foreground flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2`}
        >
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </div>
        <div
          className={`text-muted-foreground flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2`}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Help</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/">
          <div className="flex items-center ">
            <FiHome className="mr-2  h-4 w-4" />
            <span>Home</span>
          </div>
        </Link>
        <div />
        <div
          //   onClick={() => {
          //     signOut({ callbackUrl: "/" });
          //   }}
          className=" pb-10 text-red-700 hover:text-red-500 ease-in duration-150 font-bold flex items-center cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}
