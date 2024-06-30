"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineEdit, MdOutlinePerson } from "react-icons/md";
import { MdEditLocationAlt } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

export function ProfileDialog(props: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h3 className="text-xl cursor-pointer text-muted-foreground hover:text-primary">
          <MdOutlineEdit />
        </h3>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action="">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdOutlinePerson />
                <Label htmlFor="StoreName">Name</Label>
              </div>
              <Input
                type="text"
                name="storeName"
                defaultValue={props.storeDetails.storeName}
                placeholder=""
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdOutlineEmail />
                <Label htmlFor="storeEmail">Email</Label>
              </div>
              <Input
                type="email"
                name="StoreEmail"
                placeholder=""
                // value={session?.user?.email ?? ""}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <FiPhone />
                <Label htmlFor="StorePhone">Phone</Label>
              </div>
              <Input
                type="tel"
                name="storePhone"
                defaultValue={props.storeDetails.storePhone}
                // placeholder="Store Phone"
              />
            </div>
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="h-11 w-28 mt-4 bg-primary hover:bg-opacity-90 duration-300 text-white px-2 rounded-lg"
            >
              Save changes
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
