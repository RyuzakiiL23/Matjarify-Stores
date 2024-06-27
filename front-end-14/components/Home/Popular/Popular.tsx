import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa6";
import { ImArrowRight2, ImArrowUpRight2 } from "react-icons/im";

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="relative h-fit w-full mt-10 px-4">
            <div className="relative cursor-pointer block sm:h-[32vw] lg:h-[23vw] 2xl:h-[16vw] h-[65vw] w-full rounded-lg ">
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
                  <Link
                    target="_blank"
                    href={`/${item.title}`}
                    className="h-14 w-36 flex items-center justify-center gap-3 rounded-lg hover:bg-primary bg-background hover:text-background duration-300"
                  >
                    <ImArrowRight2 /> <span>Visit Store</span>
                  </Link>
                  <div className="absolute justify-between bottom-0 w-full p-10 py-6">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-background text-xl">Store Name</h1>
                        <Link
                          target="_blank"
                          href={`/${item.title}`}
                          className="text-background font-extrabold text-xl hover:opacity-60"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div className="flex gap-4 items-end">
                        <Link target="_blank" href={`/${item.title}`}>
                          <ImArrowUpRight2 className="text-background text-3xl hover:opacity-60 duration-150 ease-out" />
                        </Link>
                        <FaRegBookmark className="text-background text-3xl hover:opacity-60 duration-150 ease-out" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Link
                target="_blank"
                href={`/${item.title}`}
                className="font-bold text-sm cursor-pointer"
              >
                {item.title}
              </Link>
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
                <p className="text-[10px] border rounded-full px-1 border-trdbackground">
                  PRO
                </p>
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
            <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
