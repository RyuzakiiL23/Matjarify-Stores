import Blog from "@/components/Home/Blog/Blog";
import Branding from "@/components/Home/Branding/Branding";
import Assistance from "@/components/Home/Collaborators/Assistance";
import Hero from "@/components/Home/Hero/Hero";
import NewSection from "@/components/Home/New/NewSection";
import Popular from "@/components/Home/Popular/Popular";
import Subscriptions from "@/components/Home/Subsciriptions/Subscriptions";
import Trending from "@/components/Home/Trending/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trending />
     <Popular />
     <Assistance />
     <NewSection />
     <Branding/>
     <Blog />
     <Subscriptions />
    </div>
  );
}
