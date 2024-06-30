import Link from "next/link";
import React from "react";

export default function ProfileDialog(props: any) {
  return (
    <div
      className={`${
        props.hover ? "opacity-100" : "opacity-0"
      } duration-500 transition-all`}
    >
      <div className=" border-trdbackground border-b  py-4 w-full ">
        <div className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
          <h1 className="px-8 py-2 text-background">Become Pro</h1>
        </div>
      </div>
      <ul className="py-4 border-trdbackground border-b w-full">
        <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
          <Link href={'/Profile'}>
            <h1 className="text-background p-8 py-2">Profile</h1>
          </Link>
        </li>
        <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
          <Link href={'/Favorites'}>
          <h1 className="text-background p-8 py-2">Favorites</h1>
          </Link>
        </li>
        <li className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150">
          <Link href={'/Carts'}>
          <h1 className="text-background p-8 py-2">Carts</h1>
          </Link>
        </li>
      </ul>
      <div className="  py-4 w-full ">
        <div
          onClick={props.logOut}
          className="hover:bg-opacity-100 bg-trdbackground bg-opacity-0 duration-150"
        >
          <h1 className="px-8 py-2 text-background">LogOut</h1>
        </div>
      </div>
    </div>
  );
}
