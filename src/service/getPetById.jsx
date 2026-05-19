export const getPetById=async(id)=>{
const res=await fetch(`http://localhost:8000/petDetails/${id}`)
const pet=await res.json()
return pet;
}