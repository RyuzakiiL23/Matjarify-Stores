"use client";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCartShopping, FaRegBookmark } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const authState = useSelector(
    (state: RootState) => state.AuthSlice.authState
  );
  const [user, setUser] = useState<any>("wait");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : 'wait');
  }, [authState]);

  return (
    <div className="h-full w-full flex flex-col items-center p-20">
      <div>
        <div className="w-full flex justify-center">
          <div className="flex relative border-primary justify-center items-center overflow-hidden bg-primary text-secondary h-20 w-20 rounded-full ">
            <span className="p-0 m-0 text-6xl pb-2 font-bold ">
              {user === "wait" ? "" : user.name.slice(0, 1)}
            </span>
          </div>
        </div>
        <h1 className="w-full text-center my-4 text-2xl font-bold text-primary">
          {user === "wait" ? "" : user.name}
        </h1>
      </div>
      {/* Cart Favorite */}
      <div className="w-96 justify-around flex ">
        <Link href="/Carts" className="cursor-pointer">
          <div className="text-3xl p-4 flex flex-col items-center">
            <FaCartShopping />
            <h1 className="text-xl">Carts</h1>
          </div>
        </Link>
        <Link href="/Favorites" className="cursor-pointer">
          <div className="text-3xl p-4 flex flex-col items-center">
            <FaRegBookmark />
            <h1 className="text-xl">Favorites</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
