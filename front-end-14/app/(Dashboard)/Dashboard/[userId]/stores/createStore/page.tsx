"use client";
import DashHeading from "@/components/User/MiniLayout/DashHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { use, useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdLocationOn, MdOutlineEmail, MdStorefront } from "react-icons/md";
import { auth } from "@/auth";
import { createStore } from "@/lib/actions/storeAction";
import { useDispatch } from "react-redux";
// import { incremant } from "@/lib/Features/StoreState/StoreSlice";
import { useSession } from "next-auth/react";
import { hasNonEmptyString } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { redirect } from "next/navigation";
import { incremant } from "@/lib/Features/StoreState/StoreSlice";
import { changeState } from "@/lib/Features/DashState/DashSlice";

export default function Page() {
  const [storeName, setStoreName] = useState<string>("");
  const page = "Stores";
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [thereIsError, setThereIsError] = useState(false);
  const [storeCreated, setStoreCreated] = useState(false);

  const [errorRes, setErrorRes] = useState<{
    storeName: string;
    storeAddress: string;
    storeEmail: string;
    storePhone: string;
    storeCity: string;
    storePostCode: string;
    storeBusinessName: string;
  }>({
    storeName: "",
    storeAddress: "",
    storeEmail: "",
    storePhone: "",
    storeCity: "",
    storePostCode: "",
    storeBusinessName: "",
  });
  console.log(errorRes);
  const { toast } = useToast();
  const [duplicatedName, setDuplicatedName] = useState(false);

  const clientAction = async (formData: FormData) => {
    const store = formData.get("storeName");
    setStoreName(store as string)
    let res: any;
    try {
      res = await createStore(formData);
      console.log(res);
      if (res.duplicated) {
        setThereIsError(false);
        setDuplicatedName(true);
        toast({
          variant: "destructive",
          description: "Store name already exists.",
        });
      }
      else if (res.error) {
        console.log(res.error);
        setDuplicatedName(false);
        setErrorRes(res.error);
        setThereIsError(true);
        toast({
          variant: "destructive",
          description: "One or multiple fields required.",
        });
      } else {
        setDuplicatedName(false);
        setThereIsError(false);
        setErrorRes({
          storeName: "",
          storeAddress: "",
          storeEmail: "",
          storePhone: "",
          storeCity: "",
          storePostCode: "",
          storeBusinessName: "",
        });
        setStoreCreated(true);
        toast({
          variant: "storeSuccess",
          description: "Store created.",
        });
      }
    } catch (error) {
      console.log(error);
    }

  };
useEffect(() => {
  if (storeCreated === true) {
    window.location.href = `/dashboard/${session?.user?.name}/stores/${storeName}`;
  }
}, [storeCreated, session?.user?.name, storeName])

  console.log(errorRes);
  return (
    <div className="px-20 flex flex-grow flex-col h-full ">
      <DashHeading page={page} />
      <form
        action={async (FormData) => {
          await clientAction(FormData);
        }}
      >
        <div className="relative flex flex-col gap-4 w-full h-full bg-background rounded-2xl shadow-md border p-8 ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <MdStorefront />
                <label htmlFor="StoreName">Store Name</label>
              </div>
              <input
                className={`{${
                  errorRes.storeName || duplicatedName ? " border-red-500 border-2" : ""
                } h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="text"
                name="storeName"
                placeholder="Matjarify"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <MdLocationOn />
                <label htmlFor="storeBusinessName">Business Name</label>
              </div>
              <input
                className={`{${
                  errorRes.storeBusinessName && thereIsError ? " border-red-500 border-2" : ""
                } h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="text"
                name="storeBusinessName"
                placeholder="Matjarify"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <MdOutlineEmail />
                <label htmlFor="storeEmail">Store Email</label>
              </div>
              <input
                className={`{${
                  errorRes.storeEmail && thereIsError ? " border-red-500 border-2" : ""
                } h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="email"
                name="storeEmail"
                defaultValue={session?.user?.email ?? ""}
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <FiPhone />
                <label htmlFor="StorePhone">Store Phone</label>
              </div>
              <input
                className={`{${
                  errorRes.storePhone && thereIsError ? " border-red-500 border-2" : ""
                }  h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="tel"
                name="storePhone"
                placeholder="Store Phone"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <div className="flex gap-2 text-muted-foreground items-center text-sm">
              <MdOutlineEmail />
              <label htmlFor="storeAddress">Business Adress</label>
            </div>
            <input
              className={`${
                errorRes.storeAddress && thereIsError ? " border-red-500 border-2" : ""
              }  h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
              type="text"
              name="storeAddress"
              placeholder="adress"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <MdLocationOn />
                <label htmlFor="storeCity">City</label>
              </div>
              <input
                className={`{${
                  errorRes.storeCity && thereIsError ? " border-red-500 border-2" : ""
                }  h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="text"
                name="storeCity"
                placeholder="City"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <div className="flex gap-2 text-muted-foreground items-center text-sm ">
                <MdLocationOn />
                <label htmlFor="storePostCode">Postcode</label>
              </div>
              <input
                className={`{${
                  errorRes.storePostCode && thereIsError ? " border-red-500 border-2" : ""
                }  h-10 rounded-md p-2 text-sm text-foreground font- bg-input`}
                type="text"
                name="storePostCode"
                placeholder="50050"
              />
            </div>
          </div>
          <span
            className={`${
              duplicatedName ? "" : "hidden"
            } text-red-500 font-bold`}
          >
            Store name already exists
          </span>
          <span
            className={`${thereIsError ? "" : "hidden"} text-red-500 font-bold`}
          >
            One or multiple fields required
          </span>
          <Button
            onClick={() => dispatch(incremant())}
            className=""
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>

      <Toaster />
    </div>
  );
}
