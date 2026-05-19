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
import Link from "next/link";

const PetCard = ({ pet }) => {
  const {
    _id,
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
        <Link href={`/petDetails/${_id}`}>
          <Button className="border border-gray-300 p-2 rounded-sm text-sm flex items-center gap-1 cursor-pointer">
            View Details <HiArrowUpRight />
          </Button>
        </Link>
        <Link href={"/signin"}>
          <Button className="cursor-pointer p-2 text-white text-sm rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffd166] hover:shadow-[var(--shadow-lg)]">
            Adopt Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
