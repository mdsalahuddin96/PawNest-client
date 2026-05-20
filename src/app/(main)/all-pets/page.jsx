import FilterPets from "@/components/FilterPets";
import PetCard from "@/components/PetCard";
import { getAllPets } from "@/service/getAllPets";

const AllPetsPage = async () => {
  const pets = await getAllPets();
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="section-title">Find Your Perfect Companion 🐾</h1>
          <p>Explore adorable pets waiting for a loving home. From playful puppies to cuddly cats — your new best friend might be just a click away.</p>
        </div>
        <FilterPets/>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
