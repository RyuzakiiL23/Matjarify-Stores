"use client";
import { useSession } from "next-auth/react";
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
import { MdEditLocationAlt } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { getSpecificStore } from "@/lib/actions/storeAction";

export function StoreAdressDialog(props: any) {
  const [waiting, setWaiting] = useState(false);
  // const { data: session } = useSession();
  // const dashState = useSelector((state: RootState) => state.dash.value);
  // const [storeDetails, setStoreDetails] = useState<{
  //   storeName: string;
  //   storeAddress: string;
  //   storeEmail: string;
  //   storePhone: string;
  //   storeCity: string;
  //   storePostCode: string;
  //   storeBusinessName: string;
  // }>({
  //   storeName: "",
  //   storeAddress: "",
  //   storeEmail: "",
  //   storePhone: "",
  //   storeCity: "",
  //   storePostCode: "",
  //   storeBusinessName: "",
  // });

  // useEffect(() => {
  //   const fetchStores = async () => {
  //     try {
  //       setWaiting(true);
  //       const storesInfo = await getSpecificStore(dashState);
  //       if (storesInfo) {
  //         // Update the storeDetails state with the values from storesInfo
  //         setStoreDetails({
  //           storeName: storesInfo.storeName,
  //           storeAddress: storesInfo.storeAddress,
  //           storeEmail: storesInfo.storeEmail,
  //           storePhone: storesInfo.storePhone,
  //           storeCity: storesInfo.storeCity,
  //           storePostCode: storesInfo.storePostCode,
  //           storeBusinessName: storesInfo.storeBusinessName,
  //         });
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setWaiting(false);
  //   };

  //   fetchStores();
  // }, [dashState]);
  if (waiting) {
    return <div>loading...</div>;
  } else {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <h3 className="text-xl cursor-pointer text-muted-foreground hover:text-primary">
            <MdEditLocationAlt />
          </h3>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit adress</DialogTitle>
            <DialogDescription>
              Make changes to your adress here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdLocationOn />
                <Label htmlFor="BusinessName">Business Name</Label>
              </div>
              <Input
                defaultValue={props.storeDetails.storeBusinessName}
                type="text"
                name="BusinessName"
                placeholder="Matjarify"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdOutlineEmail />
                <Label htmlFor="BusinessAdress">Business Adress</Label>
              </div>
              <Input
                defaultValue={props.storeDetails.storeAddress}
                type="text"
                name="BusnessAdress"
                placeholder="adress"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdLocationOn />
                <Label htmlFor="city">City</Label>
              </div>
              <Input
                defaultValue={props.storeDetails.storeCity}
                type="text"
                name="city"
                placeholder="City"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex gap-2">
                <MdLocationOn />
                <Label htmlFor="PostCode">Postcode</Label>
              </div>
              <Input
                defaultValue={props.storeDetails.storePostCode}
                type="text"
                name="Postcode"
                placeholder="50050"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
}
