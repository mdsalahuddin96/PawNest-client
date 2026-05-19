import PetCard from "@/components/PetCard";
import { getAllPets } from "@/service/getAllPets";

const AllPetsPage = async () => {
  const pets = await getAllPets();
  console.log(pets[0])
  return (
    <div className="container mx-auto mt-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
