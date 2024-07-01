"use client";

import React, { useState, useRef } from "react";
import "../store.css";
import DashHeading from "@/components/User/MiniLayout/DashHeading";
import { Store } from "lucide-react";
import StoreInfo from "@/components/User/Stores/CreateStore/StoreInfo";
import Products from "@/components/User/Stores/CreateStore/Products";
import Divers from "@/components/User/Stores/CreateStore/Divers";
import Collections from "@/components/User/Stores/CreateStore/Collections";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

function Page({ params }: { params: { storeName: string } }) {
  const page = "Stores";
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Store info");
  const dashState = useSelector((state: RootState) => state.dash.value);

  const moveSlider = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="px-20 flex flex-col flex-grow h-full  ">
      {/* we replaced the params with Redux variable */}
      {/* <DashHeading name={params.storeName} page={page} /> */}
      <DashHeading name={dashState} page={page} />
      <div className="relative w-full h-full bg-background rounded-t-2xl shadow-md border-primary border border-t-0">
        <div className=" relative flex w-full h-8  justify-between items-center font-semibold text-sm border-b-primary border-b ">
          <div
            className={`slider rounded-t-xl cursor-pointer border-2  text-primary border-primary border-b-0 font-bold bg-background text-center ${activeTab === 0 ? 'border-l-0' : activeTab === 3 ? 'border-r-0' : ''}`}
            style={{ left: `${activeTab * 25}%` }}
          >
            {selectedTab}
          </div>
          <span
            onClick={() => {
              moveSlider(0), setSelectedTab("Store info");
            }}
            className=" text-center text-muted-foreground font-bold   border-2 border-x-0 border-b-0 rounded-t-xl bg-input w-full h-full cursor-pointer"
          >
            Store info
          </span>
          <span
            onClick={() => {
              moveSlider(1), setSelectedTab("Products");
            }}
            className=" text-center text-muted-foreground font-bold   border-2 border-x-0 border-b-0 rounded-t-xl bg-input w-full h-full cursor-pointer"
          >
            Products
          </span>
          <span
            onClick={() => {
              moveSlider(2), setSelectedTab("Collections");
            }}
            className=" text-center text-muted-foreground font-bold   border-2 border-x-0 border-b-0 rounded-t-xl bg-input w-full h-full cursor-pointer"
          >
            Collections
          </span>
          <span
            onClick={() => {
              moveSlider(3), setSelectedTab("Divers");
            }}
            className=" text-center text-muted-foreground font-bold   border-2 border-x-0 border-b-0 rounded-t-xl bg-input w-full h-full cursor-pointer"
          >
            Divers
          </span>
        </div>
        <div className={`${selectedTab !== 'Store info' ? 'hidden' : ''} relative h-full p-8`}>
          <StoreInfo />
        </div>
        <div className={`${selectedTab !== 'Products' ? 'hidden' : ''} relative h-full p-8`}>
          <Products />
        </div>
        <div className={`${selectedTab !== 'Collections' ? 'hidden' : ''} relative h-full p-8`}>
          <Collections />
        </div>
        <div className={`${selectedTab !== 'Divers' ? 'hidden' : ''} relative h-full p-8`}>
          <Divers />
        </div>
      </div>
    </div>
  );
}

export default Page;
