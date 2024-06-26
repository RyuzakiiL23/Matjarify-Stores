"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function BestProducts() {
  const params = useParams<{ store_id: string }>();
  const products = [
    {
      name: "category 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/public/rog.png",
    },
    {
      name: "category 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/public/rog.png",
    },
    {
      name: "category 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/public/rog.png",
    },
  ];
  return (
    <div className="my-10 lg:w-[1400px] mx-auto">
      <h2 className="flex font-bold h-full justify-center items-center text-primary text-4xl p-10">
        BestProducts
      </h2>
      <div className="flex gap-20 justify-between">
        {products.map((product) => (
          <div
            key={product.name}
            className="w-[400px] h-[270px] p-8 bg-border relative overflow-hidden group cursor-default"
          >
            <h4 className="font-bold text-xl pb-2 text-muted-foreground">
              {product.name}
            </h4>
            <p className="text-muted-foreground">{product.description}</p>
            <Link href={`/${params.store_id}/categories/${product.name}`}>
              <button className="mt-4 bg-primary text-white py-2 font-semibold px-4">
                voir plus
              </button>
            </Link>
            <Image
              src={product.image}
              alt={product.name}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="absolute bottom-[-40px] right-[-20px] group-hover:bottom-[-20px] transition-all duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
