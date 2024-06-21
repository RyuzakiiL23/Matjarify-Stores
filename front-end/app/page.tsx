import Assistance from "@/components/Home/Collaborators/Assistance";
import Hero from "@/components/Home/Hero/Hero";
import Popular from "@/components/Home/Popular/Popular";
import Trending from "@/components/Home/Trending/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trending />
     <Popular />
     <Assistance />
    </div>
  );
}
