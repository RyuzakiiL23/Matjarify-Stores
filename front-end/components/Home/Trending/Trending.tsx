"use client";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa6";
import { ImArrowRight2, ImArrowUpRight2 } from "react-icons/im";

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
            <div className="relative block lg:h-[32vw] 2xl:h-[23vw] h-[65vw] w-full rounded-lg cursor-pointer ">
              <Image
                src={item.img}
                // height={400}
                // width={400}
                fill
                alt="img 1"
                style={{ objectFit: "cover" }}
                className="rounded-lg w-full h-full"
              />
              <div className="absolute h-full w-full opacity-0 hover:opacity-100 bg-gradient-to-t from-black/50 transition-all duration-300 ease-in-out to-primary/0  ">
                <div className="flex h-full w-full justify-center items-center">
                  <button className="h-14 w-36 flex items-center justify-center gap-3 rounded-lg hover:bg-primary bg-background hover:text-background duration-300">
                    <ImArrowRight2/> <span>Visit Store</span>
                  </button>
                  <div className="absolute justify-between bottom-0 w-full p-10 py-6">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-background text-xl">Store Name</h1>
                        <p className="text-background font-extrabold text-xl">{item.title}</p>
                      </div>
                      <div className="flex gap-4 items-end">
                        <ImArrowUpRight2 className="text-background text-3xl hover:opacity-60 duration-150 ease-out"/>
                        <FaRegBookmark className="text-background text-3xl hover:opacity-60 duration-150 ease-out"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
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
            <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
