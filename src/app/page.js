import Banner from "@/components/Banner";
import FeaturedPets from "@/components/FeaturedPets";
import { getFeaturedPets } from "@/service/getFeaturedPets";
import { Separator } from "@heroui/react";
import Image from "next/image";
export default async function Home() {
  const pets = await getFeaturedPets();
  const pet=pets[0]
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto">

        <FeaturedPets pets={pets}/>
      </div>
    </div>
  );
}
