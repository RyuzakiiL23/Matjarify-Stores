'use client';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

export default function StoresCart() {
    const screenWidth = useWindowSize();

  const data = [
    {
      title: "Back-end",
      img: "/t1.png",
      user: "Price",
    },
    {
      title: "Designer",
      img: "/t2.png",
      user: "Price",
    },
    {
      title: "Front-end",
      img: "/t3.png",
      user: "price",
    },
    {
      title: "Cloud Engineer",
      img: "/t4.png",
      user: "Price",
    },
  ];
  return (
    <div className="bg-background w-full h-fit mb-28 relative">
      <div className="pt-10 pl-4 flex flex-col gap-4 text-primary justify-center">
        <h1 className="text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
          Your Cart Accross Stores.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
        {data.slice(0, screenWidth.width < 1025 ? 2 : screenWidth.width < 1280 ? 3 : 4 ).map((item, index) => (
          <div key={index} className="relative h-fit  w-full mt-10 px-4">
            <div className="relative block md:h-[32vw] lg:h-[23vw] xl:h-[16vw] h-[65vw] w-full rounded-lg ">
              <Image
                src={item.img}
                // height={400}
                // width={400}
                fill
                alt="img 1"
                style={{ objectFit: "cover" }}
                className=" w-full h-full border rounded-lg shadow-md"
                sizes="(max-width: 640px) 65vw, (max-width: 1024px) 32vw, (max-width: 1536px) 23vw, 16vw"
              />
            </div>
            <div className="flex pl-2 gap-4 items-center mt-4">
              <p className="text-xs text-trdbackground">by</p>
              <div className="flex items-center justify-center  gap-4 group cursor-pointer">
                <div className="relative">
                  <p className="md:flex font-bold text-primary border-b-2 border-border ">
                    {item.user}
                  </p>
                  <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
