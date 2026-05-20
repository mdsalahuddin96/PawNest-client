import Banner from "@/components/Banner";
import FeaturedPets from "@/components/FeaturedPets";
import { getFeaturedPets } from "@/service/getFeaturedPets";

export default async function Home() {
  const pets = await getFeaturedPets();
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto">

        <FeaturedPets pets={pets}/>
      </div>
    </div>
  );
}
