'use client';
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Assistance() {
    const screenWidth = useWindowSize();

  const data = [
    {
      title: "Back-end",
      img: "/11.png",
      user: "Clarke",
    },
    {
      title: "Designer",
      img: "/12.png",
      user: "Danial",
    },
    {
      title: "Front-end",
      img: "/13.png",
      user: "Joe",
    },
    {
      title: "Cloud Engineer",
      img: "/14.png",
      user: "Adam",
    },
  ];
  return (
    <div className="bg-background w-full h-fit mb-28 relative">
      <div className="pt-10 pl-4 flex flex-col gap-4 text-primary justify-center">
        <h2 className="">Need help?</h2>
        <h1 className="text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
          Ask for Assistance.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.slice(0, screenWidth.width < 1025 ? 2 : screenWidth.width < 1280 ? 3 : 4 ).map((item, index) => (
          <div key={index} className="relative h-fit w-full mt-10 px-4">
            <div className="relative block md:h-[32vw] lg:h-[23vw] xl:h-[16vw] h-[65vw] w-full rounded-lg ">
              <Image
                src={item.img}
                // height={400}
                // width={400}
                fill
                alt="img 1"
                style={{ objectFit: "cover" }}
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="flex gap-4 items-center mt-4">
              <p className="font-bold text-sm cursor-pointer">{item.title}</p>
              <p className="text-xs text-trdbackground">with</p>
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

      <div className="pt-10 flex xs:flex-row flex-col gap-4 items-center text-primary justify-center">
        <h3>Get in touch with our support team</h3>
        <div className="flex items-center justify-center  gap-4 group cursor-pointer">
          <FaArrowRight />
          <div className="relative">
            <p className="md:flex font-bold text-lg text-primary border-b-2 border-border ">
              Ask For Assistance 
            </p>
            <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
