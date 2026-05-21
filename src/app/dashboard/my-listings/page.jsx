import ListingsPetCard from "@/components/ListingsPetCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const response = await fetch(
    `http://localhost:8000/petsBy-userId/${user?.id}`,
  );
  const pets = await response.json();
  const available = pets.filter((pet) => pet.status === "Available");
  const adopted = pets.filter((pet) => pet.status === "adopted");
  const requestPetRes = await fetch(`http://localhost:8000/request`);
  const requestPets = await requestPetRes.json();

  return (
    <section>
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h1 className="section-title">
              My <span className="gradient-text">Listings</span>
            </h1>
            <p className="section-subtitle mt-2">
              Manage your listed pets, track adoption requests, and update pet
              information easily.
            </p>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">
              Total Listings
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
              {pets.length}
            </h2>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">
              Available Pets
            </p>

            <h2 className="mt-2 text-4xl font-bold text-[var(--success)]">
              {available.length}
            </h2>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm text-[var(--text-secondary)]">Adopted Pets</p>

            <h2 className="mt-2 text-4xl font-bold text-[#ff7a59]">
              {adopted.length}
            </h2>
          </div>
        </div>

        {/* PET CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* CARD */}

          {pets.length === 0 ? (
            <></>
          ) : (
            <>
              {pets.map((pet) => {
                const petRequest = requestPets.find(
                  (req) => req.pet_id === pet._id,
                );

                return (
                  <ListingsPetCard
                    key={pet._id}
                    pet={pet}
                    petRequest={petRequest}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyListingsPage;
