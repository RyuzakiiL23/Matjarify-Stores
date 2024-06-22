import Image from "next/image";
import React from "react";

export default function Subscriptions() {
  const data = [
    {
      title: "Deploy your Store",
      img: "/submit.jpg",
      description:
        "Deploy your store with ease and start selling your products online",
      btn: "Submit Store",
    },
    {
      title: "Submit for a Subscription",
      img: "/member.jpg",
      description:
        "Get the full features of our platform by subscribing to a plan & more ...",
      btn: "Subscribe",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2">
      {data.map((item, index) => (
        <div key={index} className="relative h-fit w-full mt-10 px-4">
          <div className="relative block lg:h-[32vw] h-[320px] w-full rounded-lg ">
            <Image
              src={item.img}
              // height={400}
              // width={400}
              fill
              alt="img 1"
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full h-full"
            />
            <div className="absolute justify-between w-full h-full text-secbackground p-4 sm:p-6 md:p-8 xl:p-10">
              <div className="flex flex-col justify-between h-full">
                <h1>{item.title}</h1>
                <p className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold">{item.description}</p>
                <button className="px-6 sm:text-xl 2xl:text-2xl py-3 bottom-0 border w-fit rounded-lg">
                  {item.btn}
                </button>
                <p>Got questions? Read our FAQs</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
