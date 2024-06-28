"use client";
import { FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { SignUpOpen, LogInOpen } from "@/lib/features/LogInDialogSlice";
import LogIn from "../Auth/LogIn";
import Image from "next/image";
import Cookies from "universal-cookie";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { NotAuthenticatedState } from "@/lib/features/AuthSlice";
import { TbLogout2 } from "react-icons/tb";

export default function NavBar() {
  const authState = useSelector(
    (state: RootState) => state.AuthSlice.authState
  );
  const cookies = new Cookies(null, { path: "/" });
  const dispatch = useDispatch();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [authState]);

  const logOut = async () => {
    const res = await fetch("http://localhost:8000/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      cookies.remove("token");
      dispatch(NotAuthenticatedState());
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <div className="flex items-center gap-4 md:h-16 h-14 text-primary px-4 py-1.5 lg:px-14">
      <div className="xl:hidden">
        <NavMenu />
      </div>
      <Link href="/">
        <div className="relative w-6">
          <Image
            src={"/MatjarifyStoresLogo.png"}
            alt="M"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
        {/* <h1 className="cursor-pointer font-extrabold text-2xl"></h1> */}
      </Link>
      <div className="xl:flex hidden gap-4 px-8 font-bold">
        <p className="cursor-pointer hover:opacity-70 duration-200">Trending</p>
        <p className="cursor-pointer hover:opacity-70 duration-200">Popular</p>
        <p className="cursor-pointer hover:opacity-70 duration-200">New</p>
        <Link href={"/AllStores"}>
          <p className="cursor-pointer hover:opacity-70 duration-200">All</p>
        </Link>
        <p className="cursor-pointer hover:opacity-70 duration-200">Blogs</p>
        <p className="cursor-pointer hover:opacity-70 duration-200">
          Templates
        </p>
        <p className="cursor-pointer hover:opacity-70 duration-200">Support</p>
      </div>
      <div
        className={`bg-input w-full h-10 flex items-center p-4 cursor-text rounded-lg`}
      >
        <FaMagnifyingGlass className="mr-4 text-sm" />
        <p>Search</p>
      </div>
      <div className="flex items-center gap-8">
        <LogIn />

        {!user ? (
          <div>
            <FaUser
              onClick={() => dispatch(LogInOpen())}
              className="text-xl cursor-pointer xs:hidden"
            />
            <div className="xs:flex hidden ">
              <p
                onClick={() => dispatch(LogInOpen())}
                className="w-16 font-bold cursor-pointer"
              >
                Log In
              </p>
              <p
                onClick={() => dispatch(SignUpOpen())}
                className="w-16 font-bold cursor-pointer"
              >
                Sign Up
              </p>
            </div>
          </div>
        ) : (
          <div className="cursor-pointer" onClick={logOut}>
          <div className="flex relative hover:bg-red-200 duration-300 ease-in-out justify-center items-center overflow-hidden bg-primary text-secondary h-10 w-10 rounded-full group">
              <span className="p-0 m-0 group-hover:hidden text-4xl pb-2 font-bold ">{user.name.slice(0, 1)}</span>
              <span className="p-0 m-0 group-hover:flex hidden text-primary font-bold text-2xl"><TbLogout2 /></span>
            </div>
          </div>
        )}

        <div className="hidden lg:flex gap-4">
          <button className="h-11 w-28  bg-primary hover:bg-opacity-90 duration-300 text-white px-2 rounded-lg">
            Subscribe
          </button>
          <button className="h-11 w-36 border border-primary rounded-lg hover:bg-primary hover:text-white duration-300">
            Create Store
          </button>
        </div>
      </div>
    </div>
  );
}
