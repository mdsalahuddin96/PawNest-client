export const getAllPets=async()=>{
    const res=await fetch('http://localhost:8000/allpets');
    const pets=await res.json()
    return pets;
}