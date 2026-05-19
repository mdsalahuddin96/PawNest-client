import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { TbVaccineOff } from "react-icons/tb";
import { PiPawPrintFill } from "react-icons/pi";
import { Button } from "@heroui/react";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
// {
//   _id: '6a0b54621e115717fbd04706',
//   name: 'Bella',
//   species: 'Dog',
//   breed: 'Golden Retriever',
//   gender: 'Female',
//   age: 2,
//   size: 'Large',
//   color: 'Golden',
//   weight: '28 kg',
//   vaccinated: true,
//   neutered: true,
//   healthCondition: 'Healthy',
//   specialNeeds: false,
//   description: 'Bella is a friendly and playful Golden Retriever who loves children and outdoor activities.',
//   personality: [ 'Friendly', 'Playful', 'Loyal' ],
//   goodWith: { children: true, dogs: true, cats: false },
//   adoptionFee: 120,
//   location: 'Dhaka, Bangladesh',
//   status: 'Available',
//   rescueStory: 'Bella was rescued from a roadside shelter after being abandoned by her previous owner.',
//   image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop',
//   owner: {
//     name: 'Rahim Ahmed',
//     email: 'rahim@example.com',
//     phone: '+8801712345678'
//   },
//   createdAt: '2026-05-18T10:00:00Z'
// }
const PetCard = ({ pet }) => {
  const {
    name,
    species,
    location,
    breed,
    gender,
    age,
    image,
    status,
    vaccinated,
  } = pet;
  return (
    <div className="pet-card ">
      <div className="relative hover:scale-110  transition  duration-500 ease-in ">
        <Image
          src={image}
          alt={name}
          height={400}
          width={400}
          className="pet-card-image"
        />
        <div className="pet-card-overlay" />
        {status == "Available" ? (
          <div className="badge-success absolute top-5 right-1.5 gap-1.5">
            <AiFillCheckCircle />
            {status}
          </div>
        ) : (
          <div className="badge-primary absolute top-5 right-1.5 gap-1.5">
            <IoIosCloseCircle />
            {status}
          </div>
        )}
      </div>
      <div className="pet-card-body">
        <h3 className="pet-card-title">{name}</h3>
        <p className="pet-card-text flex items-center gap-0.5">
          <LuMapPin /> {location}
        </p>
        <p className="text-sm text-muted">Pet Attributes:</p>
        <div className="flex gap-4 flex-wrap items-center p-2 rounded-xl border border-[var(--border-color)] text-xs bg-[var(--surface-soft)]">
          <span className="flex items-center gap-0.5">
            <PiPawPrintFill />
            {breed}
          </span>
          <span className="flex items-center gap-0.5">
            {gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />} {gender}
          </span>
          <span>{age}yr</span>
          <div className="flex items-center gap-0.5">
            <span>{vaccinated ? <TbVaccine /> : <TbVaccineOff />}</span>
            <span>{vaccinated ? "Vaccinated" : "Not-Vaccinated"}</span>
          </div>
        </div>
      </div>
      <div className="px-6 flex justify-between items-center mb-4">
        <Button className="border border-gray-300 p-2 rounded-sm text-sm flex items-center gap-1">
          View Details <HiArrowUpRight />
        </Button>
        <Button className="p-2 text-white text-sm rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffd166] hover:shadow-[var(--shadow-lg)]">
          Adopt Now
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
