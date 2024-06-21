import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Popular() {

  const data = [
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
    <div className="bg-background w-full h-fit mb-28 relative">
      <div className="pt-10 flex flex-col gap-4 text-primary justify-center pl-4">
        <h2 className="">Browse our most popular stores</h2>
        <h1 className="text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary">
          Popular.
        </h1>
      </div>
      <div className="lg:grid grid-cols-2 2xl:grid-cols-3">
        {data.map((item, index) => (
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
                  <p className="text-[10px] border rounded-full px-1 border-trdbackground">PRO</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-10 flex xs:flex-row flex-col gap-4 items-center text-primary justify-center">
        <h3>Browse the most Popular Stores</h3>
        <div className="flex items-center justify-center  gap-4 group cursor-pointer">
          <FaArrowRight />
          <div className="relative">
            <p className="md:flex font-bold text-lg text-primary border-b-2 border-border ">
              View Popular Stores
            </p>
            <div className="border-t border group-hover:w-full duration-300 ease-out border-trdbackground w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
