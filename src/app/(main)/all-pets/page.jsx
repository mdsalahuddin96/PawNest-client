import FilterPets from "@/components/FilterPets";
import PetCard from "@/components/PetCard";
import { getAllPets } from "@/service/getAllPets";
// import { useSearchParams } from "next/navigation";

const AllPetsPage = async ({ searchParams }) => {
  const { search, species, fee } = await searchParams;
  const pets = await getAllPets(search, species, fee);
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="text-center space-y-1">
          <h1 className="section-title">Find Your Perfect Companion 🐾</h1>
          <p>
            Explore adorable pets waiting for a loving home. From playful
            puppies to cuddly cats <br /> your new best friend might be just a
            click away.
          </p>
        </div>
        <FilterPets />
      </div>
      {pets.length == 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[32px] border border-[var(--border-color)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-md)]">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--surface-soft)] text-5xl">
            🐾
          </div>

          <h2 className="heading-font text-3xl font-bold text-[var(--text-primary)]">
            No Pets Found
          </h2>

          <p className="mt-3 max-w-md text-[var(--text-secondary)] leading-relaxed">
            We couldn’t find any pets matching your search or filter. Try using
            different keywords or explore other adorable pets.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet}></PetCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPetsPage;
