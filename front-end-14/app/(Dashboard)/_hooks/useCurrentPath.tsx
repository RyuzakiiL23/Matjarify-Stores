"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function useCurrentPath() {
  const currentPath = usePathname();

  if (currentPath === "/Dashboard") {
    return "Dashboard";
  } else if (currentPath === "/Dashboard/Profile") {
    return "Business Profile";
  }

  const parts = currentPath.split("/");
  return parts.length > 2 ? parts[2] : "Dashboard";
}
