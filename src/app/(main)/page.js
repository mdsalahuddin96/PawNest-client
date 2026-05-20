import Banner from "@/components/Banner";
import FeaturedPets from "@/components/FeaturedPets";
import SuccessStories from "@/components/SuccessStory";
import WhyAdoptPets from "@/components/WhyAdopt";
import { getFeaturedPets } from "@/service/getFeaturedPets";

export default async function Home() {
  const pets = await getFeaturedPets();
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto">
        <FeaturedPets pets={pets}/>
        <WhyAdoptPets/>
        <SuccessStories/>
      </div>
    </div>
  );
}
