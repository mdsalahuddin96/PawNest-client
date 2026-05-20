"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const pets = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    title: "Give abandoned pets a loving home",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop",
    title: "Every paw deserves love and care",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    title: "Find your forever furry friend",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden py-10 md:py-12 lg:py-16">
      {/* Background decoration effects */}
      <div className="absolute left-[-60px] top-[-60px] h-[200px] w-[200px] rounded-full bg-[#ff7a59]/20 blur-3xl md:left-[-120px] md:top-[-120px] md:h-[300px] md:w-[300px]" />
      <div className="absolute bottom-[-60px] right-[-60px] h-[200px] w-[200px] rounded-full bg-cyan-400/20 blur-3xl md:bottom-[-120px] md:right-[-120px] md:h-[300px] md:w-[300px]" />

      {/* Main Container */}
      <div className="container-custom mx-auto px-4 grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
        
        {/* Left Content Column */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <div>
            <div className="inline-flex items-center rounded-full border border-[#ff7a59]/20 bg-[#ff7a59]/10 px-4 py-2 text-xs md:text-sm font-medium text-[#ff7a59]">
              🐾 Find Your Perfect Companion
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h1 className="heading-font text-3xl font-bold leading-tight text-[#2d3748] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Bring Home
              <br />
              Your New
              <span className="gradient-text"> Best Friend</span>
            </h1>
            <p className="mx-auto lg:mx-0 max-w-xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)]">
              Adopt loving pets and give abandoned animals a second chance at happiness. Every adoption creates a beautiful story of love and care.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="btn-primary px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105">
              Adopt Now
            </button>
            <button className="rounded-full border border-[#ff7a59]/20 bg-white/70 dark:bg-[#111827]/70 px-6 py-3 font-semibold text-[#2d3748] dark:text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Slider Column */}
        <div className="relative w-full order-1 lg:order-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="rounded-2xl md:rounded-4xl overflow-hidden"
          >
            {pets.map((pet) => (
              <SwiperSlide key={pet.id}>
                <div className="relative overflow-hidden rounded-2xl md:rounded-4xl border border-white/10 shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full">
                    <Image
                      src={pet.image}
                      alt={pet.title}
                      fill
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 600px"
                      priority={pet.id === 1}
                      className="object-cover"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Slider Floating Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
                    <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md">
                      🐾 Pet Adoption Program
                    </div>
                    <h2 className="mt-2 sm:mt-4 max-w-md heading-font text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
                      {pet.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}