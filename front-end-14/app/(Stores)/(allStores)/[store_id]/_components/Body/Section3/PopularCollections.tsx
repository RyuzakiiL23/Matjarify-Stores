'use client';
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PopularCollections() {
  const params = useParams<{ store_id: string }>()
  const collections = [
    {
      name: "Collection 1",
      image: "/public/rog.png",
      link: "/product/1",
    },
    {
      name: "Collection 2",
      image: "/public/rog.png",
      link: "/product/2",
    },
    {
      name: "Collection 3",
      image: "/public/rog.png",
      link: "/product/3",
    },
    {
      name: "Collection 4",
      image: "/public/rog.png",
      link: "/product/4",
    },
    {
      name: "Collection 5",
      image: "/public/rog.png",
      link: "/product/5",
    },
    {
      name: "Collection 6",
      image: "/public/rog.png",
      link: "/product/6",
    },
  ];
  return (
    <div className="my-10 lg:w-[1400px] mx-auto">
      <h2 className="w-full text-start font-bold h-full justify-center items-center text-primary text-2xl py-10">
        PopularCollections
      </h2>
      <div className="flex gap-4 justify-between">
        {collections.map((collection) => (
          <Link href={`${params.store_id}/categories/${collection.name}`} className="group cursor-pointer"  key={collection.name}>
            <div className="w-48 h-48 p-8 bg-border rounded-full cursor-pointer relative flex items-center justify-center overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                className="absolute group-hover:p-2 transition-all duration-500 ease-out"
              />
            </div>
            <div className="flex text-primary group-hover:text-cyan-400 items-center gap-2 mt-2 justify-center transition-all duration-300 ease-out relative">
              <h3 className="text-lg font-bold">
                {collection.name}
              </h3>
              <FaArrowRight className="absolute opacity-0 group-hover:opacity-100 right-0 duration-300 ease-out group-hover:right-5"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
