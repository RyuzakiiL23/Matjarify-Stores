"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { NotAuthenticatedState } from "@/lib/features/AuthSlice";
import { useRouter } from 'next/navigation'

export default function ProfileDialog() {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const authState = useSelector(
    (state: RootState) => state.AuthSlice.authState
  );
  const cookies = new Cookies(null, { path: "/" });
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>("wait");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, [authState]);

  //Hover effect

  useEffect(() => {
    if (!hover) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setOpen(true);
    }

    // Cleanup function to clear the timeout if `hover` changes
  }, [hover]);

  const logOut = async () => {
    console.log("logout");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (res.ok) {
      router.push("/");
      cookies.remove("token");
      setOpen(false);
      dispatch(NotAuthenticatedState());
      localStorage.removeItem("user");
      setUser(null);
    }
  };
  return (
    <div
      className="cursor-pointer relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex relative hover:opacity-85 border-primary duration-300 ease-in-out justify-center items-center overflow-hidden bg-primary text-secondary h-10 w-10 rounded-full ">
        <span className="p-0 m-0 text-4xl pb-2 font-bold ">
          {user === 'wait' || !user ? '' : user.name.slice(0, 1)}
        </span>
      </div>
      <div className="absolute  top-12 left-[-180px]  lg:left-0">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            open
              ? `bg-primary ${
                  hover ? "bg-opacity-100" : "bg-opacity-0"
                } duration-500 transition-all h-fit w-56 rounded-lg`
              : "hidden"
          }
        >
          <div
            className={`${
              hover ? "opacity-100" : "opacity-0"
            } duration-500 transition-all`}
          >
            <div className=" border-trdbackground border-b  py-4 w-full ">
              <div className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
                <h1 className="px-8 py-2 text-background">Become Pro</h1>
              </div>
            </div>
            <ul className="py-4 border-trdbackground border-b w-full">
              <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
                <Link href={"/Profile"}>
                  <h1 className="text-background p-8 py-2">Profile</h1>
                </Link>
              </li>
              <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
                <Link href={"/Favorites"}>
                  <h1 className="text-background p-8 py-2">Favorites</h1>
                </Link>
              </li>
              <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
                <Link href={"/Carts"}>
                  <h1 className="text-background p-8 py-2">Carts</h1>
                </Link>
              </li>
            </ul>
            <div className="  py-4 w-full ">
              <div
                onClick={logOut}
                className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150"
              >
                <h1 className="px-8 py-2 text-background">LogOut</h1>
              </div>
            </div>
          </div>
          {/* <ProfileDialog logOut={logOut} hover={hover}/> */}
        </div>
      </div>
    </div>
  );
}
