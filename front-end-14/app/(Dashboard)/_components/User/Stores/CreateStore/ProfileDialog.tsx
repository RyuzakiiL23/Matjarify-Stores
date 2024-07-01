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
import { MdOutlineEdit } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdStorefront } from "react-icons/md";

export function ProfileDialog(props: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h3 className="text-xl cursor-pointer text-muted-foreground hover:text-primary">
          <MdOutlineEdit />
        </h3>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action=''>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdStorefront />
                <Label htmlFor="StoreName">Store Name</Label>
              </div>
              <Input
                type="text"
                name="storeName"
                defaultValue={props.storeDetails.storeName}
                placeholder="Matjarify"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdOutlineEmail />
                <Label htmlFor="storeEmail">Store Email</Label>
              </div>
              <Input
                disabled
                type="email"
                name="StoreEmail"
                // value={session?.user?.email ?? ""}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <FiPhone />
                <Label htmlFor="StorePhone">Store Phone</Label>
              </div>
              <Input
                type="tel"
                name="storePhone"
                defaultValue={props.storeDetails.storePhone}
                placeholder="Store Phone"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
