export const getPetById=async(id,token)=>{
const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petDetails/${id}`,{
    headers:{
        authorization:`Bearer ${token}`
    }
});
const pet=await res.json()
return pet;
}