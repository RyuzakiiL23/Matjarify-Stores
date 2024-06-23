import Image from "next/image";
import React from "react";

export default function AllStores() {
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
    {
      title: "Noomo",
      img: "/5.png",
      user: "Omar",
      letter: "O",
    },
    {
      title: "Daylight",
      img: "/6.png",
      user: "Ahlame",
      letter: "A",
    },
    {
      title: "Redis Agency",
      img: "/7.png",
      user: "Kaoutar",
      letter: "K",
    },
    {
      title: "Bemo",
      img: "/8.png",
      user: "Omar",
      letter: "O",
    },
    {
      title: "A./CHEN",
      img: "/9.png",
      user: "Ahlame",
      letter: "A",
    },
    {
      title: "Luis Bizarro",
      img: "/10.png",
      user: "Kaoutar",
      letter: "K",
    },
  ];
  return (
    <div className=" mb-20 lg:px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.flatMap((item, index) =>
          data.flatMap((subItem, subIndex) =>
            data.map((subSubItem, subSubIndex) => (
              <div
                key={`${index}-${subIndex}-${subSubIndex}`}
                className="relative h-fit w-full mt-10 px-4"
              >
                <div className="relative block md:h-[32vw] lg:h-[23vw] xl:h-[16vw] h-[65vw] w-full rounded-lg">
                  <Image
                    src={subSubItem.img}
                    fill
                    alt="img 1"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg w-full h-full"
                  />
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <p className="font-bold text-sm cursor-pointer">
                    {subSubItem.title}
                  </p>
                  <p className="text-xs text-trdbackground">by</p>
                  <div className="flex items-center justify-center gap-4 group cursor-pointer">
                    <div className="flex justify-center items-center text-white font-extrabold rounded-full bg-trdbackground w-7 h-7">
                      {subSubItem.letter}
                    </div>
                    <div className="relative">
                      <p className="md:flex font-bold text-primary border-b-2 border-border">
                        {subSubItem.user}
                      </p>
                      <div className="border-t border group-hover:w-full duration-300 ease-out border-trdbackground w-0 bottom-0 absolute"></div>
                    </div>
                    <p className="text-[10px] border rounded-full px-1 border-trdbackground">
                      PRO
                    </p>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
}
