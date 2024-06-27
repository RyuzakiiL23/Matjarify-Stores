import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function NewSection() {
  const data = [
    {
      title: "New Stores",
      img: "/15.png",
      description:
        "Deploy your store with ease and start selling your products online",
    },
    {
      title: "All Stores",
      img: "/16.png",
      description:
        "Get the full features of our platform by subscribing to a plan",
    },
  ];

  return (
    <div className="mb-40">
      <div className="pt-10 flex flex-col gap-4 text-primary justify-center pl-4">
        <h2 className=""></h2>
        <h1 className="text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
          More Categories.
        </h1>
      </div>
      <div className="grid lg:grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="relative h-fit w-full mt-10 px-4">
            <div className="relative block lg:h-[32vw] h-[65vw] w-full rounded-lg ">
              <Image
                src={item.img}
                // height={400}
                // width={400}
                fill
                alt="img 1"
                style={{ objectFit: "cover" }}
                className="rounded-lg w-full h-full"
                sizes="(max-width: 1024px) 65vw, 32vw"
              />
            </div>
            <div className="p-2 flex justify-start  gap-4 items-center  text-primary ">
              <h3>Browse {item.title}</h3>
              <div className="flex items-center justify-center  gap-4 group cursor-pointer">
                <FaArrowRight />
                <div className="relative">
                  <p className="md:flex font-bold text-lg text-primary border-b-2 border-border ">
                    View {item.title}
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
