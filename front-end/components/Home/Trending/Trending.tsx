'use client';
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Trending() {
    const screenWidth = useWindowSize();

  const data = [
    {
      title: "3Dear",
      img: "/2.png",
      user: "Abdulrahman",
      letter: "A",
    },
    {
      title: "Shelter",
      img: "/3.png",
      user: "Hamza",
      letter: "H",
    },
    {
      title: "Proyect - Designing the Future",
      img: "/4.png",
      user: "Kaoutar",
      letter: "K",
    },
  ];

  return (
    <div className="bg-background w-full h-fit mb-28 relative">
      <div className="pt-10 flex flex-col gap-4 items-center text-primary justify-cente">
        <h2 className="text-sm">Hotest</h2>
        <h1 className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary text-center">
          Trending
        </h1>
        <h3>Browse the most Trending Stores</h3>
      </div>
      <div className="lg:flex">
        {data.slice(0, screenWidth.width > 1491 ? 3 : 2).map((item, index) => (
          <div key={index} className="relative h-fit w-full mt-10 px-4">
            <div className="relative block lg:h-[32vw] 2xl:h-[23vw] h-[65vw] w-full rounded-lg ">
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
              <p className="text-xs text-trdbackground">by</p>
              <div className="flex items-center justify-center  gap-4 group cursor-pointer">
                <div className="flex  justify-center items-center text-white font-extrabold rounded-full bg-trdbackground w-7 h-7">
                  {item.letter}
                </div>
                <div className="relative">
                  <p className="md:flex font-bold text-primary border-b-2 border-border ">
                    {item.user}
                  </p>
                  <div className="border-t border group-hover:w-full duration-300 ease-out border-trdbackground w-0 bottom-0 absolute"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 flex xs:flex-row flex-col gap-4 items-center text-primary justify-center">
        <h3>Browse the most Trending Stores</h3>
        <div className="flex items-center justify-center  gap-4 group cursor-pointer">
          <FaArrowRight />
          <div className="relative">
            <p className="md:flex font-bold text-lg text-primary border-b-2 border-border ">
              View Trending Stores
            </p>
            <div className="border-t border group-hover:w-full duration-300 ease-out border-trdbackground w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
