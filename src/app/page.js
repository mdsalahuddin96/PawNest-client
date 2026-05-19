import Banner from "@/components/Banner";
import { getFeaturedPets } from "@/service/getFeaturedPets";
import { Separator } from "@heroui/react";
import Image from "next/image";
export default async function Home() {
  const pets = await getFeaturedPets();
  const pet=pets[0]
  return (
    <div className="">
      <Banner />
      <div className="pet-card w-96">
        <Image src={pet.image} alt={pet.name} height={200} width={200} className="pet-card-image"/>
        <div className="pet-card-body">
          <h3 className="pet-card-title">{pet.name}</h3>
          <div className="space-x-4 h-4 flex items-center pet-card-text">
            <span>{pet.breed}</span>
            <Separator orientation="vertical" variant="secondary" className="bg-black" />
            <span>{pet.age}yr</span>
            <Separator orientation="vertical" />
            <span>{pet.gender}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
