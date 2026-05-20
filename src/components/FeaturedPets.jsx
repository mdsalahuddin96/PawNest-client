"use client";
import PetCard from "@/components/PetCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedPets({ pets }) {


  return (
    <section>
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            Featured <span className="gradient-text">Pets</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            Meet some adorable pets waiting for a loving forever home. Adopt
            your perfect companion today.
          </p>
        </div>

        {/* PET GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* CARD  */}
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet}></PetCard>
          ))}
        </div>
        <div className="flex items-center justify-center my-10">
          <Link href={'/all-pets'} className="cursor-pointer">
            <button className="btn-primary px-4 flex items-center gap-1.5"> View All <FaArrowRight /></button>
          </Link>
        </div>
      </div>
    </section>
   
  );
}
