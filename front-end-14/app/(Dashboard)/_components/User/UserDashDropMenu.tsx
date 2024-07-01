"use client";
import React from "react";
import { FiHome } from "react-icons/fi";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/public/logo.svg";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "@/lib/Features/DashState/DashSlice";
import type { RootState } from "@/lib/store";

import { useState } from "react";

export default function UserDashDropMenu() {
  const { data: session } = useSession();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dashState = useSelector((state: RootState) => state.dash.value);
  const dispatch = useDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={!session}>
        <Image
          src={session ? session.user?.image : logo}
          width={35}
          height={35}
          alt="User"
          className={`rounded-full ${
            session
              ? "cursor-pointer border-cyan-300 border-2"
              : "border-black bottom-2"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={` w-56 bg-background`}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link
            onClick={() => dispatch(changeState("Profile"))}
            href={`/dashboard/${session?.user?.name}/profile`}
          >
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Help</span>
          </DropdownMenuItem>
          <Link href={`/dashboard/${session?.user?.name}/settings`}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4 bg-background" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-background">
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4 " />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/">
          <DropdownMenuItem>
            <FiHome className="mr-2 h-4 w-4" />
            <span>Matjarify</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
            onClick={() => { signOut({ callbackUrl: '/' })}}
            className="  text-red-700 hover:text-red-500 ease-in duration-150 font-bold"
        >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
