import { auth } from "@/lib/auth";
import { getPetById } from "@/service/getPetById";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaTransgender } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const pet = await getPetById(id);
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <section className="my-10 container mx-auto">
      <div className="w-40">
        <Link href={"/all-pets"}>
          <Button
            variant="outline"
            className="border-0 cursor-pointer flex items-center gap-5  mb-5"
          >
            <FiArrowLeft /> Back to All Pets
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {/* IMAGE */}

          <div
            className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[var(--border-color)]
          bg-[var(--surface)]
          shadow-[var(--shadow-md)]
        "
          >
            <Image
              src={pet.image}
              alt={pet.name}
              height={400}
              width={400}
              className="h-[420px] w-full object-cover"
            />

            <div className="pet-card-overlay" />

            {/* BADGES */}

            <div className="absolute left-6 top-6 flex flex-wrap gap-3 ">
              <span className="badge-primary">{pet.species}</span>

              <span className="badge-success">{pet.status}</span>
            </div>

            {/* NAME */}

            <div className="absolute bottom-6 left-6 ">
              <h1
                className="
              heading-font

              text-4xl
              md:text-5xl

              font-bold

              text-white
            "
              >
                {pet.name}
              </h1>

              <p className="mt-2 text-lg text-white/90">{pet.breed}</p>
            </div>
          </div>

          {/* PET INFO */}

          <div className="glass-card p-8">
            <div
              className="
            mb-6

            flex
            items-center
            justify-between
            gap-4

            flex-wrap
          "
            >
              <div>
                <h2 className="section-title text-3xl">About {pet.name}</h2>

                <p className="section-subtitle mt-2">
                  Learn more about this adorable pet before adoption.
                </p>
              </div>

              <div className="badge-primary text-base px-4 py-2">
                ${pet.adoptionFee} Adoption Fee
              </div>
            </div>

            {/* INFO GRID */}

            <div
              className="
            grid
            grid-cols-2
            md:grid-cols-3

            gap-4
          "
            >
              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">Age</p>

                <h4 className="mt-1 text-lg font-semibold">{pet.age} Years</h4>
              </div>

              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">
                  <FaTransgender /> Gender
                </p>

                <h4 className="mt-1 text-lg font-semibold">{pet.gender}</h4>
              </div>

              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">Size</p>

                <h4 className="mt-1 text-lg font-semibold">{pet.size}</h4>
              </div>

              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">Color</p>

                <h4 className="mt-1 text-lg font-semibold">{pet.color}</h4>
              </div>

              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">Vaccinated</p>

                <h4 className="mt-1 text-lg font-semibold">
                  {pet.vaccinated ? "Yes" : "No"}
                </h4>
              </div>

              <div className="bg-[var(--surface-soft)] rounded-2xl p-4">
                <p className="text-sm text-muted">Location</p>

                <h4 className="mt-1 text-lg font-semibold">{pet.location}</h4>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-8">
              <h3 className="mb-3 text-2xl font-bold">Description</h3>

              <p className="pet-card-text">{pet.description}</p>
            </div>

            {/* PERSONALITY */}

            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-bold">Personality</h3>

              <div className="flex flex-wrap gap-3">
                {pet.personality.map((item) => (
                  <span key={item} className="badge-primary px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RESCUE STORY */}

            <div className="mt-8">
              <h3 className="mb-3 text-2xl font-bold">Rescue Story</h3>

              <p className="pet-card-text">{pet.rescueStory}</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="
        sticky
        top-24
      "
        >
          <div className="glass-card p-8">
            {/* HEADER */}

            <div className="mb-6">
              <div className="badge-primary px-4 py-2">🐾 Adoption Request</div>

              <h2 className="mt-4 text-3xl font-bold heading-font">
                Adopt {pet.name}
              </h2>

              <p className="section-subtitle mt-2">
                Fill out the form to begin the adoption process.
              </p>
            </div>

            {/* FORM */}

            <form className="space-y-5">
              {/* PET NAME */}

              <div className="form-field">
                <label className="text-sm font-medium">Pet Name</label>

                <input
                  type="text"
                  value={pet.name}
                  readOnly
                  className="input-field opacity-80 cursor-not-allowed"
                />
              </div>

              {/* USER NAME */}

              <div className="form-field">
                <label className="text-sm font-medium">User Name</label>

                <input
                  type="text"
                  value={user?.name}
                  readOnly
                  className="input-field opacity-80 cursor-not-allowed"
                />
              </div>

              {/* USER EMAIL */}

              <div className="form-field">
                <label className="text-sm font-medium">User Email</label>

                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="input-field opacity-80 cursor-not-allowed"
                />
              </div>

              {/* PICKUP DATE */}

              <div className="form-field">
                <label className="text-sm font-medium">Pickup Date</label>

                <input type="date" className="input-field" />
              </div>

              {/* MESSAGE */}

              <div className="form-field">
                <label className="text-sm font-medium">Message</label>

                <textarea
                  rows={5}
                  placeholder="Why do you want to adopt this pet?"
                  className="
                input-field

                resize-none
                py-4
              "
                />
              </div>

              {/* STATUS */}

              <input type="hidden" value="pending" />

              {/* BUTTON */}

              <button
                type="submit"
                className="
              btn-primary

              w-full
              py-4

              rounded-2xl

              text-lg
            "
              >
                Adopt Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailsPage;
