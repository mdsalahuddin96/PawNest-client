"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const pets = [
  {
    id: 1,
    image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    title: "Give abandoned pets a loving home",
  },

  {
    id: 2,
    image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop",
    title: "Every paw deserves love and care",
  },

  {
    id: 3,
    image:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    title: "Find your forever furry friend",
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      {/* background effect */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#ff7a59]/20
          blur-3xl
        "
      />
      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* container */}
      <div
        className="
          container-custom
          grid
          items-center
          gap-12
          lg:grid-cols-2
        "
      >
        {/* left content */}
        <div className="space-y-8">
          {/* badge */}
          <div
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#ff7a59]/20
              bg-[#ff7a59]/10
              px-4
              py-2
              text-sm
              font-medium
              text-[#ff7a59]
            "
          >
            🐾 Find Your Perfect Companion
          </div>

          {/* title */}

          <div className="space-y-4">
            <h1
              className="
                heading-font
                text-5xl
                font-bold
                leading-tight
                text-[#2d3748]
                dark:text-white
                md:text-7xl
              "
            >
              Bring Home
              <br />
              Your New
              <span className="gradient-text">
                {" "}
                Best Friend
              </span>
            </h1>
            <p
              className="
                max-w-xl
                text-lg
                leading-relaxed
                text-[var(--text-secondary)]
              "
            >
              Adopt loving pets and give abandoned animals
              a second chance at happiness. Every adoption
              creates a beautiful story of love and care.
            </p>
          </div>

          {/* buttons */}

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Adopt Now
            </button>
            <button
              className="
                rounded-full
                border
                border-[#ff7a59]/20
                bg-white/70
                dark:bg-[#111827]/70
                px-6
                py-3
                font-semibold
                text-[#2d3748]
                dark:text-white
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Learn More
            </button>
          </div>
        </div>
        {/* right content */}

        <div className="relative">
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
            className="rounded-4xl"
          >
            {pets.map((pet) => (
              <SwiperSlide key={pet.id}>
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-4xl
                    border
                    border-white/10
                    shadow-2xl
                  "
                >
                  {/* image */}
                  <Image
                    src={pet.image}
                    alt={pet.title}
                    height={400}
                    width={400}
                    className="
                      h-137.5
                      w-full
                      object-cover
                    "
                  />

                  {/* overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* content */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      w-full
                      p-8
                    "
                  >
                    <div
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-sm
                        text-white
                        backdrop-blur-md
                      "
                    >
                      🐾 Pet Adoption Program
                    </div>
                    <h2
                      className="
                        mt-4
                        max-w-md
                        heading-font
                        text-3xl
                        font-bold
                        leading-tight
                        text-white
                      "
                    >
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