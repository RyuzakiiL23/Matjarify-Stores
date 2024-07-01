"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
export default function useCurrentPath() {
  const currentPath = usePathname();

  if (currentPath === "/Dashboard") {
    return "Dashboard";
  }

  const parts = currentPath.split("/");
  return parts.length > 2 ? parts[2] : "Dashboard";
}
