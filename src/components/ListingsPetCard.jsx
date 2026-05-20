import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";


const ListingsPetCard = ({pet}) => {
    const{image,name,status,breed,adoptionFee}=pet;
  return (
    <div className="pet-card">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="h-72 w-full object-cover transition-all duration-500 hover:scale-110"
        />

        <div className="absolute top-4 right-4 badge-success">{status}</div>
      </div>
      {/* BODY */}
      <div className="pet-card-body">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="pet-card-title">{name}</h2>

            <p className="mt-1 text-[var(--text-secondary)]">
              {breed}
            </p>
          </div>

          <div className="rounded-full bg-[#ff7a59]/10 px-4 py-2 text-sm font-semibold text-[#ff7a59]">
            ${adoptionFee}
          </div>
        </div>

        {/* ACTIONS */}

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex items-center gap-1.5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-primary transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
           <LuHeartHandshake/> Requests
          </button>

          <button className="flex items-center gap-1.5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
           <BiEdit/> Edit
          </button>

          <button className="flex items-center gap-1.5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
           <BsEye/> View
          </button>

          <button className="flex items-center gap-1.5 rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600">
          <MdOutlineDeleteForever/> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingsPetCard;
