import ListingsPetCard from "@/components/ListingsPetCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export const metadata={
  title:"My listings - PawNest",
  description:"Here are all pets are shown which is added by the user"
}
const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const {token}=await auth.api.getToken({
    headers:await headers()
  })
  const user = session?.user;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/petsBy-userId/${user?.id}`,{
      headers:{
        authorization:`Bearer ${token}`
      }
    },
  );
  const pets = await response.json();
  const available = pets.filter((pet) => pet.status === "Available");
  const adopted = pets.filter((pet) => pet.status === "Adopted");
  const requestPetRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/request`,{
    headers:{
      authorization:`Bearer ${token}`
    }
  });
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
        {pets.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-[32px] border border-[var(--border-color)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-md)]">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--surface-soft)] text-5xl">
              🐾
            </div>

            <h2 className="heading-font text-3xl font-bold text-[var(--text-primary)]">
              You haven&apost listed any pets yet
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* CARD */}
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
          </div>
        )}
      </div>
    </section>
  );
};

export default MyListingsPage;
