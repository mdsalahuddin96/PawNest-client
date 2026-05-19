"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  HiArrowUpRight,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import "swiper/css";
import { Button } from "@heroui/react";
import { useRef, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { TbVaccineOff } from "react-icons/tb";
import { PiPawPrintFill } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";

export default function FeaturedPets({ pets }) {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        slidesPerView={2.2}
        spaceBetween={24}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        className="!overflow-visible"
      >
        {pets.map((pet, index) => (
          <SwiperSlide key={index}>
            <div className=" overflow-hidden group">
              <div className="pet-card ">
                <div className="relative hover:scale-110  transition  duration-500 ease-in ">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    height={400}
                    width={400}
                    className="pet-card-image"
                  />
                  <div className="pet-card-overlay" />
                  {pet.status == "Available" ? (
                    <div className="badge-success absolute top-5 right-1.5 gap-1.5">
                      <AiFillCheckCircle />
                      {pet.status}
                    </div>
                  ) : (
                    <div className="badge-primary absolute top-5 right-1.5 gap-1.5">
                      <IoIosCloseCircle />
                      {pet.status}
                    </div>
                  )}
                </div>
                <div className="pet-card-body">
                  <h3 className="pet-card-title">{pet.name}</h3>
                  <p className="pet-card-text flex items-center gap-0.5">
                    <LuMapPin /> {pet.location}
                  </p>
                  <p className="text-sm text-muted">Pet Attributes:</p>
                  <div className="flex gap-4 flex-wrap items-center p-2 rounded-xl border border-[var(--border-color)] text-xs bg-[var(--surface-soft)]">
                    <span className="flex items-center gap-0.5">
                      <PiPawPrintFill />
                      {pet.breed}
                    </span>
                    <span className="flex items-center gap-0.5">
                      {pet.gender === "Male" ? (
                        <BsGenderMale />
                      ) : (
                        <BsGenderFemale />
                      )}{" "}
                      {pet.gender}
                    </span>
                    <span>{pet.age}yr</span>
                    <div className="flex items-center gap-0.5">
                      <span>
                        {pet.vaccinated ? <TbVaccine /> : <TbVaccineOff />}
                      </span>
                      <span>
                        {pet.vaccinated ? "Vaccinated" : "Not-Vaccinated"}
                      </span>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-between mt-10">
        {/* counter */}
        <div className="flex items-center gap-4 w-full max-w-md">
          <span className="text-sm text-[var(--text-primary)] whitespace-nowrap">
            {currentSlide}/{pets.length}
          </span>

          <div className="h-[1px] w-full bg-gray-300 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
              style={{
                width: `${(currentSlide / pets.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* arrows */}
        <div className="flex items-center gap-3 ml-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition"
          >
            <HiOutlineArrowLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition"
          >
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
