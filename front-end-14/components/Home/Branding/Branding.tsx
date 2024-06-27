"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Branding() {

  const data = [
    {
      title: "Deploy your Store",
      img: "/17.png",
      description:
        "Deploy your store with ease and start selling your products online",
      btn: "Submit Store",
    },
    {
      title: "Submit for a Subscription",
      img: "/18.png",
      description:
        "Get the full features of our platform by subscribing to a plan",
      btn: "Subscribe",
    },
  ];

  return (
    <div className="bg-background w-full h-fit mb-28 relative">
      <div className="pt-10 flex flex-col gap-4 items-center text-primary justify-cente">
        <h2 className="text-sm">Slutions</h2>
        <h1 className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary text-center">
          Branding
        </h1>
        <h3>Our provided solutions</h3>
      </div>
      <div className="grid lg:grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="relative h-fit w-full mt-10 px-4">
            <div className="relative block lg:h-[43vw] h-[86vw] w-full rounded-lg ">
              <Image
                src={item.img}
                // height={400}
                // width={400}
                fill
                alt="img 1"
                style={{ objectFit: "cover" }}
                className="rounded-lg w-full h-full"
                sizes="(max-width: 1024px) 86vw, 43vw"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-10 flex xs:flex-row flex-col gap-4 items-center text-primary justify-center">
        <h3>Browse All Services</h3>
        <div className="flex items-center justify-center  gap-4 group cursor-pointer">
          <FaArrowRight />
          <div className="relative">
            <p className="md:flex font-bold text-lg text-primary border-b-2 border-border ">
              Learn More About Our Services
            </p>
            <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
