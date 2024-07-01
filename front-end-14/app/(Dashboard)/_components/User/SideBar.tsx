"use client";
import { FiHome } from "react-icons/fi";
import { MdStorefront } from "react-icons/md";
import {
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "@/lib/Features/DashState/DashSlice";
import type { RootState } from "@/lib/store";

import { useEffect, useState } from "react";
import { IStoreDocument } from "@/models/storeModels";
import { Types } from "mongoose";
import { getStores } from "@/lib/actions/storeAction";
import { SerializedStore } from "@/types/types";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { data: session } = useSession();
  const dashState = useSelector((state: RootState) => state.dash.value);
  const storeState = useSelector((state: RootState) => state.StoreState.value);
  const dispatch = useDispatch();
  const [storeName, setStoreName] = useState<string>("");

  const [stores, setStores] = useState< IStoreDocument[] | Types.ObjectId[] | undefined | SerializedStore[]>([]);
  const [waiting, setWaiting] = useState(false);

  const revalidate = getStores

  useEffect(() => {

  }, [dashState])


  useEffect(() => {
    const fetchStores = async () => {
      setWaiting(true);
      try {
        const storesInfo = await getStores();
        setStores(storesInfo);
      } catch (error) {
        console.error(error);
      }
    };
    setWaiting(false);
    fetchStores();
  }, []);
  return (
    <div className="relative flex flex-col text-sm font-semibold justify-between p-4 h-full">
      <div className="flex flex-col gap-2">
        <div className="py-8">Dashboard</div>
        <Link
          onClick={() => dispatch(changeState("Profile"))}
          href={`/dashboard/${session?.user?.name}/profile`}
        >
          <div
            className={` flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2 ${
              dashState === "Profile"
                ? "bg-background text-foreground rounded-lg "
                : "text-muted-foreground"
            }`}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </div>
        </Link>
        {/* <Link href={`/${session?.user?.name}/stores`}> */}
        <div>
          <div
            className={` ${
              dashState === "Stores" ||
              dashState === "CreateStore" ||
              dashState === storeName
                ? "bg-background text-foreground rounded-lg "
                : "text-muted-foreground"
            }  flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2`}
            onClick={() =>
              {dispatch(
                changeState(
                  dashState === "Stores" || dashState === "CreateStore" || dashState === storeName
                    ? ''
                    : "Stores"
                )
              )}
            }
          >
            <MdStorefront className="mr-2 h-4 w-4" />
            <span className="flex justify-between">Stores </span>
          </div>

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
              {stores && stores.map((store) => (
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
              ))}
            </div>

            <Link
              onClick={() => {dispatch(changeState("CreateStore"))}}
              href={`/dashboard/${session?.user?.name}/stores/createStore`}
            >
              <button
                className={` ${
                  dashState === "CreateStore" ? "" : "text-muted-foreground"
                } duration-300 ease-in-out  mt-2 ml-4 flex items-center hover:bg-gray-300 w-full justify-start py-2 mb-4`}
              >
                <MdStorefront className="mr-2 h-4 w-4" />
                Create Store
              </button>
            </Link>
          </div>
        </div>
        {/* </Link> */}
        <Link
          onClick={() => dispatch(changeState("Settings"))}
          href={`/dashboard/${session?.user?.name}/settings`}
        >
          <div
            className={` flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2 ${
              dashState === "Settings"
                ? "bg-background text-foreground rounded-lg "
                : "text-muted-foreground"
            }`}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </div>
        </Link>
        <div
          className={`text-muted-foreground flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-background p-2`}
        >
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </div>
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
            <span>Matjarify</span>
          </div>
        </Link>
        <div />
        <div
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
          className=" pb-10 text-red-700 hover:text-red-500 ease-in duration-150 font-bold flex items-center cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}
