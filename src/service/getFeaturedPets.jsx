export const getFeaturedPets=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featuredPets`);
    const pets=await res.json()
    return pets;
}
