export const getFeaturedPets=async()=>{
    const res=await fetch('http://localhost:8000/featuredPets');
    const pets=await res.json()
    return pets;
}
