
import BestProducts from "./_components/Body/Section1/BestProducts";
import FeaturedProducts from "./_components/Body/Section2/FeaturedProducts";
import PopularCollections from "./_components/Body/Section3/PopularCollections";
import Collections from "./_components/Body/Section4/Collections";
import SectionEnd from "./_components/Body/SectoinEnd/SectionEnd";
import Banner from "./_components/Hero/Banner";

export default function Home(params: any) {
  return (
    <main className="w-full h-full relative bg-muted">
      {/* <HeadersCollections /> */}
      <Banner />
      <BestProducts />
      <FeaturedProducts />
      <PopularCollections />
      <Collections />
      <SectionEnd />
    </main>
  );
}
