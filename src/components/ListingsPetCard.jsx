"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";
import RequestModal from "@/components/RequestModal";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import DeleteModal from "@/components/DeleteModal";

const ListingsPetCard = ({ pet, petRequest }) => {
  const { _id, image, name, status, breed, adoptionFee } = pet;
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/deletePet/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.error("Pet deleted!");
      router.refresh();
    }
  };
  return (
    <div className="pet-card relative">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="h-72 w-full object-cover transition-all duration-500 hover:scale-110"
        />
        {status == "Available" ? (
          <div className="badge-success absolute top-5 right-1.5 gap-1.5">
            {/* <AiFillCheckCircle /> */}
            {status}
          </div>
        ) : (
          <div className="badge-primary absolute top-5 right-1.5 gap-1.5">
            {/* <IoIosCloseCircle /> */}
            {status}
          </div>
        )}
      </div>

      {/* BODY */}
      <div className="pet-card-body">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="pet-card-title">{name}</h2>
            <p className="mt-1 text-[var(--text-secondary)]">{breed}</p>
          </div>
          <div className="rounded-full bg-[#ff7a59]/10 px-4 py-2 text-sm font-semibold text-[#ff7a59]">
            ${adoptionFee}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* REQUEST BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-primary transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]"
          >
            <LuHeartHandshake /> Requests
          </button>

          <Link href={`/dashboard/update-pet/${_id}`} className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
            <button className="flex items-center gap-1.5 ">
              <BiEdit /> Edit
            </button>
          </Link>

          <Link href={`/petDetails/${_id}`} className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-3 font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[#ff7a59] hover:text-[#ff7a59]">
            <button className="flex items-center gap-1.5 ">
              <BsEye /> View
            </button>
          </Link>

          <button
            onClick={() => setIsDelOpen(true)}
            className="flex items-center gap-1.5 rounded-2xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            <MdOutlineDeleteForever /> Delete
          </button>
        </div>
      </div>

      {/* REUSABLE MODAL COMPONENT */}
      <RequestModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        request={petRequest}
      />
      <DeleteModal
        isDelOpen={isDelOpen}
        onClose={() => setIsDelOpen(false)}
        petName={name}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ListingsPetCard;
